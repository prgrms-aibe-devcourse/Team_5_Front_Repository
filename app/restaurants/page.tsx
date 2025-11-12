'use client';

import { useEffect, useState } from 'react';
import KakaoMap from '@/components/kakao-map';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Plus, Minus, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Restaurant = {
    id: number;
    rank: number;
    name: string;
    category: string;
    tags: string[];
    location: string;
    image: string;
    rating: number;
    reviews: number;
    lat: number;
    lng: number;
};

export default function RestaurantsPage() {
    const [activeTab, setActiveTab] = useState<'list' | 'map'>('map');
    const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
        lat: 33.450701,
        lng: 126.570667,
    });
    const [mapMarkers, setMapMarkers] = useState<
        Array<{
            lat: number;
            lng: number;
            title?: string;
            variant?: 'default' | 'current';
        }>
    >([
        { lat: 33.450701, lng: 126.570667, title: '제주동화마을' },
        { lat: 33.450936, lng: 126.569477, title: '수목원 야시장' },
    ]);

    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const size = 10;
    const [keyword, setKeyword] = useState('');

    const loadRestaurants = async (kw = keyword, p = page) => {
        const qs = new URLSearchParams({
            keyword: kw,
            page: String(p),
            size: String(size),
        });
        const res = await fetch(`/api/restaurants?${qs.toString()}`, {
            cache: 'no-store',
        });
        const json = await res.json();
        setRestaurants(json.data);
        setTotal(json.totalElements);
        // 지도 마커 갱신: 기존 "내 위치" 유지
        setMapMarkers((prev) => {
            const current = prev.find((m) => m.title === '내 위치');
            const list = (json.data as Restaurant[]).map((r) => ({
                lat: r.lat,
                lng: r.lng,
                title: r.name,
            }));
            return current ? [current, ...list] : list;
        });
    };

    useEffect(() => {
        loadRestaurants().catch(console.error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            {/* Header */}
            <div className="border-b bg-white dark:bg-card sticky top-0 z-30">
                <div className="container mx-auto px-4 py-3">
                    {/* Search Bar only */}
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="음식점, 지역, 음식 종류로 검색..."
                                className="pl-10"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter')
                                        loadRestaurants(keyword, 1);
                                }}
                            />
                        </div>
                        <Button
                            onClick={() => {
                                setPage(1);
                                loadRestaurants(keyword, 1);
                            }}
                        >
                            검색
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content - Split Layout */}
            <div
                className="flex flex-1 min-h-[calc(98vh-120px)]"
                style={{ height: 'calc(98vh - 120px)' }}
            >
                {/* Left Sidebar - Restaurant List */}
                <div className="w-[30%] min-w-[280px] max-w-[400px] border-r bg-white dark:bg-card overflow-y-auto">
                    <div className="p-4 border-b bg-muted/30">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">
                                검색결과{' '}
                                <span className="text-primary font-bold">
                                    {total}
                                </span>
                                개 검색
                            </p>
                            <Button
                                variant="default"
                                size="sm"
                                className="group cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                onClick={() => {
                                    if (!('geolocation' in navigator)) {
                                        window.alert(
                                            '이 브라우저는 위치 정보를 지원하지 않습니다.'
                                        );
                                        return;
                                    }
                                    navigator.geolocation.getCurrentPosition(
                                        (pos) => {
                                            const { latitude, longitude } =
                                                pos.coords;
                                            setMapCenter({
                                                lat: latitude,
                                                lng: longitude,
                                            });
                                            setMapMarkers((prev) => {
                                                const filtered = prev.filter(
                                                    (p) => p.title !== '내 위치'
                                                );
                                                return [
                                                    {
                                                        lat: latitude,
                                                        lng: longitude,
                                                        title: '내 위치',
                                                        variant: 'current',
                                                    },
                                                    ...filtered,
                                                ];
                                            });
                                        },
                                        (err) => {
                                            console.error(
                                                'geolocation error',
                                                err
                                            );
                                            window.alert(
                                                '현재 위치를 가져오지 못했습니다. 브라우저 권한을 확인해주세요.'
                                            );
                                        },
                                        {
                                            enableHighAccuracy: true,
                                            timeout: 10000,
                                            maximumAge: 60000,
                                        }
                                    );
                                }}
                            >
                                <MapPin className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
                                현위치
                            </Button>
                        </div>
                    </div>

                    <div className="divide-y">
                        {restaurants.map((restaurant) => (
                            <Link
                                key={restaurant.id}
                                href={`/restaurants/${restaurant.id}`}
                                className="block hover:bg-muted/50 transition-colors"
                            >
                                <div className="p-4">
                                    <div className="flex gap-3">
                                        {/* Rank Badge */}
                                        <div className="flex-shrink-0">
                                            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">
                                                {restaurant.rank}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={
                                                    restaurant.image ||
                                                    '/placeholder.svg'
                                                }
                                                alt={restaurant.name}
                                                width={80}
                                                height={80}
                                                className="rounded-lg object-cover"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start gap-2 mb-1">
                                                <Badge
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {restaurant.category}
                                                </Badge>
                                                <h3 className="font-semibold text-sm truncate">
                                                    {restaurant.name}
                                                </h3>
                                            </div>

                                            <div className="flex items-center gap-1 mb-2">
                                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                <span className="text-xs font-medium">
                                                    {restaurant.rating}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    ({restaurant.reviews})
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap gap-1 mb-2">
                                                {restaurant.tags.map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="outline"
                                                        className="text-xs px-1.5 py-0"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <p className="text-xs text-muted-foreground line-clamp-2">
                                                {restaurant.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="p-4 border-t flex items-center justify-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={page === 1}
                            onClick={() => {
                                const np = Math.max(1, page - 1);
                                setPage(np);
                                loadRestaurants(keyword, np);
                            }}
                        >
                            이전
                        </Button>
                        <span className="text-xs text-muted-foreground">
                            {page}
                        </span>
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={restaurants.length < 10}
                            onClick={() => {
                                const np = page + 1;
                                setPage(np);
                                loadRestaurants(keyword, np);
                            }}
                        >
                            다음
                        </Button>
                    </div>
                </div>

                {/* Right Side - Kakao Map */}
                <div className="flex-1 relative bg-gray-100 dark:bg-gray-900">
                    <KakaoMap
                        className="w-full h-full"
                        center={mapCenter}
                        level={5}
                        markers={mapMarkers}
                        enableClickDebug
                        onMapClick={(pos) => console.log('지도 클릭:', pos)}
                        lookupOnClick
                        placeSearchRadius={800}
                        placeCategory="FD6"
                        onLookupResult={(res) => {
                            console.log('Lookup 결과:', res);
                        }}
                    />

                    {/* Floating marker info examples */}
                    <div className="absolute top-4 right-4 space-y-2">
                        <Card className="shadow-lg">
                            <CardContent className="p-3">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-medium">
                                        수목원 야시장
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <Card className="shadow-lg">
                            <CardContent className="p-3">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-medium">
                                        제주동화마을
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
