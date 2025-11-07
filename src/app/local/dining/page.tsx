import BoardLayout from '@/src/components/board-layout';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Input } from '@/src/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/src/components/ui/select';
import {
    Eye,
    MessageCircle,
    Heart,
    Search,
    PenSquare,
    MapPin,
    Users,
    Clock,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DiningPage() {
    const categories = [
        { id: 'all', label: '전체', count: 892 },
        { id: 'breakfast', label: '아침', count: 123 },
        { id: 'lunch', label: '점심', count: 345 },
        { id: 'dinner', label: '저녁', count: 289 },
        { id: 'cafe', label: '카페/디저트', count: 135 },
    ];

    const posts = [
        {
            id: 1,
            category: '점심',
            categoryColor: 'bg-orange-100 text-orange-700',
            location: '강남구',
            time: '30분 전',
            meetTime: '오늘 12:30',
            title: '강남역 근처 파스타 맛집 같이 가실 분',
            excerpt: '혼자 먹기 아까운 맛집 발견했어요. 같이 가실 분 구합니다!',
            tags: ['파스타', '강남역', '점심'],
            author: '파스타러버',
            avatar: '/placeholder.svg?height=40&width=40',
            currentPeople: 2,
            maxPeople: 4,
            views: 234,
            likes: 12,
            comments: 8,
            shares: 2,
            image: '/delicious-pasta-dish.jpg',
            status: '모집중',
        },
        {
            id: 2,
            category: '저녁',
            categoryColor: 'bg-purple-100 text-purple-700',
            location: '홍대',
            time: '1시간 전',
            meetTime: '오늘 19:00',
            title: '홍대 삼겹살 맛집 같이 가요',
            excerpt: '2인분부터 주문 가능한 곳이라 같이 가실 분 찾아요.',
            tags: ['삼겹살', '홍대', '저녁'],
            author: '고기러버',
            avatar: '/placeholder.svg?height=40&width=40',
            currentPeople: 1,
            maxPeople: 2,
            views: 456,
            likes: 23,
            comments: 15,
            shares: 5,
            image: '/korean-bbq-grilling.jpg',
            status: '모집중',
        },
        {
            id: 3,
            category: '카페/디저트',
            categoryColor: 'bg-pink-100 text-pink-700',
            location: '성수동',
            time: '2시간 전',
            meetTime: '내일 15:00',
            title: '성수 카페 투어 같이 하실 분',
            excerpt: '성수동 핫플 카페 3곳 돌아다니면서 수다 떨어요.',
            tags: ['카페투어', '성수', '디저트'],
            author: '카페마니아',
            avatar: '/placeholder.svg?height=40&width=40',
            currentPeople: 3,
            maxPeople: 4,
            views: 678,
            likes: 45,
            comments: 23,
            shares: 12,
            image: '/trendy-cafe-dessert.jpg',
            status: '모집중',
        },
        {
            id: 4,
            category: '아침',
            categoryColor: 'bg-yellow-100 text-yellow-700',
            location: '이태원',
            time: '3시간 전',
            meetTime: '내일 10:00',
            title: '이태원 브런치 카페 같이 가요',
            excerpt: '주말 아침 여유롭게 브런치 즐기실 분 찾아요.',
            tags: ['브런치', '이태원', '주말'],
            author: '브런치킹',
            avatar: '/placeholder.svg?height=40&width=40',
            currentPeople: 2,
            maxPeople: 3,
            views: 345,
            likes: 28,
            comments: 12,
            shares: 4,
            image: '/brunch-avocado-toast.jpg',
            status: '모집중',
        },
        {
            id: 5,
            category: '점심',
            categoryColor: 'bg-orange-100 text-orange-700',
            location: '여의도',
            time: '5시간 전',
            meetTime: '오늘 12:00',
            title: '여의도 초밥 오마카세 같이 가실 분',
            excerpt: '점심 특선 오마카세 가성비 좋은 곳 있어요.',
            tags: ['초밥', '여의도', '오마카세'],
            author: '스시러버',
            avatar: '/placeholder.svg?height=40&width=40',
            currentPeople: 2,
            maxPeople: 2,
            views: 567,
            likes: 34,
            comments: 18,
            shares: 7,
            image: '/sushi-omakase.png',
            status: '마감',
        },
        {
            id: 6,
            category: '저녁',
            categoryColor: 'bg-purple-100 text-purple-700',
            location: '건대',
            time: '1일 전',
            meetTime: '내일 18:30',
            title: '건대 맛집 탐방 같이 하실 분',
            excerpt: '건대 숨은 맛집 3곳 돌면서 저녁 먹어요.',
            tags: ['맛집투어', '건대', '저녁'],
            author: '맛집헌터',
            avatar: '/placeholder.svg?height=40&width=40',
            currentPeople: 3,
            maxPeople: 5,
            views: 892,
            likes: 56,
            comments: 34,
            shares: 15,
            image: '/korean-street-food.jpg',
            status: '모집중',
        },
    ];

    return (
        <BoardLayout
            hero={
                <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-12 border-b">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">
                            밥친구 찾기
                        </h1>
                        <p className="text-muted-foreground">
                            혼밥이 아닌 함께 식사할 친구를 찾아보세요
                        </p>
                    </div>
                </section>
            }
        >
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <Card className="sticky top-4">
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-4">시간대</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                                category.id === 'all'
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'hover:bg-muted'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{category.label}</span>
                                                <span className="text-sm text-muted-foreground">
                                                    {category.count}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Search and Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="지역, 음식 종류로 검색..."
                                    className="pl-10"
                                />
                            </div>
                            <Button className="bg-primary text-primary-foreground">
                                <PenSquare className="h-4 w-4 mr-2" /> 글쓰기
                            </Button>
                        </div>

                        {/* Sort and Count */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">
                                    {posts.length}개
                                </span>
                                의 모임
                            </p>
                            <Select defaultValue="latest">
                                <SelectTrigger className="w-32">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="latest">
                                        최신순
                                    </SelectItem>
                                    <SelectItem value="meettime">
                                        모임시간순
                                    </SelectItem>
                                    <SelectItem value="popular">
                                        인기순
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Posts List */}
                        <div className="space-y-4">
                            {posts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/local/post/${post.id}`}
                                >
                                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                        <CardContent className="p-6">
                                            <div className="flex gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                                                        <Badge
                                                            className={`${post.categoryColor} border-0`}
                                                        >
                                                            {post.category}
                                                        </Badge>
                                                        <Badge
                                                            variant={
                                                                post.status ===
                                                                '모집중'
                                                                    ? 'default'
                                                                    : 'outline'
                                                            }
                                                            className={
                                                                post.status ===
                                                                '모집중'
                                                                    ? 'bg-green-500'
                                                                    : ''
                                                            }
                                                        >
                                                            {post.status}
                                                        </Badge>
                                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                            <MapPin className="h-3 w-3" />
                                                            <span>
                                                                {post.location}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                            <Clock className="h-3 w-3" />
                                                            <span>
                                                                {post.meetTime}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xl font-semibold mb-2 text-balance">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-muted-foreground mb-3 line-clamp-2">
                                                        {post.excerpt}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {post.tags.map(
                                                            (tag) => (
                                                                <Badge
                                                                    key={tag}
                                                                    variant="outline"
                                                                    className="text-xs"
                                                                >
                                                                    #{tag}
                                                                </Badge>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <div className="flex items-center gap-2">
                                                                <Image
                                                                    src={
                                                                        post.avatar ||
                                                                        '/placeholder.svg'
                                                                    }
                                                                    alt={
                                                                        post.author
                                                                    }
                                                                    width={32}
                                                                    height={32}
                                                                    className="rounded-full"
                                                                />
                                                                <span className="text-sm font-medium">
                                                                    {
                                                                        post.author
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-1 text-sm">
                                                                <Users className="h-4 w-4 text-primary" />
                                                                <span className="font-medium text-primary">
                                                                    {
                                                                        post.currentPeople
                                                                    }
                                                                    /
                                                                    {
                                                                        post.maxPeople
                                                                    }
                                                                    명
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                            <div className="flex items-center gap-1">
                                                                <Eye className="h-4 w-4" />
                                                                <span>
                                                                    {post.views}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Heart className="h-4 w-4" />
                                                                <span>
                                                                    {post.likes}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <MessageCircle className="h-4 w-4" />
                                                                <span>
                                                                    {
                                                                        post.comments
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-32 h-32 flex-shrink-0 hidden sm:block">
                                                    <Image
                                                        src={
                                                            post.image ||
                                                            '/placeholder.svg'
                                                        }
                                                        alt={post.title}
                                                        width={128}
                                                        height={128}
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 mt-8">
                            <Button variant="outline" size="sm" disabled>
                                이전
                            </Button>
                            <Button variant="default" size="sm">
                                1
                            </Button>
                            <Button variant="outline" size="sm">
                                2
                            </Button>
                            <Button variant="outline" size="sm">
                                3
                            </Button>
                            <Button variant="outline" size="sm">
                                다음
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </BoardLayout>
    );
}
