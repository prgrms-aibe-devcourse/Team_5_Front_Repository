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
    Share2,
    Search,
    PenSquare,
    MapPin,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function NeighborhoodPage() {
    const categories = [
        { id: 'all', label: '전체', count: 1247 },
        { id: 'news', label: '일반 게시판', count: 456 },
        { id: 'group-buy', label: '공동구매 모집', count: 389 },
        { id: 'club', label: '소모임 모집', count: 234 },
        { id: 'question', label: '궁금해요', count: 168 },
    ];

    const posts = [
        {
            id: 1,
            category: '일반 게시판',
            categoryColor: 'bg-blue-100 text-blue-700',
            location: '강남구',
            time: '2시간 전',
            title: '강남역 근처 새로 생긴 카페 추천합니다',
            excerpt:
                '분위기도 좋고 커피 맛도 훌륭해요. 혼자 작업하기 좋은 공간입니다.',
            tags: ['카페추천', '강남', '작업공간'],
            author: '카페러버',
            avatar: '/placeholder.svg?height=40&width=40',
            views: 1234,
            likes: 89,
            comments: 23,
            shares: 5,
            image: '/modern-cafe-interior.png',
        },
        {
            id: 2,
            category: '공동구매 모집',
            categoryColor: 'bg-orange-100 text-orange-700',
            location: '서초구',
            time: '3시간 전',
            title: '코스트코 과일 공동구매 하실 분 (3명 더 모집)',
            excerpt: '이번 주말에 코스트코 가는데 과일 같이 사실 분 구합니다.',
            tags: ['공동구매', '코스트코', '과일'],
            author: '절약왕',
            avatar: '/placeholder.svg?height=40&width=40',
            views: 892,
            likes: 67,
            comments: 34,
            shares: 12,
            image: '/fresh-fruits-basket.png',
        },
        {
            id: 3,
            category: '소모임 모집',
            categoryColor: 'bg-purple-100 text-purple-700',
            location: '송파구',
            time: '5시간 전',
            title: '잠실 러닝 크루 신규 멤버 모집합니다',
            excerpt:
                '매주 토요일 아침 한강에서 함께 달려요. 초보자도 환영합니다!',
            tags: ['러닝', '운동', '소모임'],
            author: '러닝매니아',
            avatar: '/placeholder.svg?height=40&width=40',
            views: 2156,
            likes: 145,
            comments: 56,
            shares: 23,
            image: '/people-running-by-river.jpg',
        },
        {
            id: 4,
            category: '궁금해요',
            categoryColor: 'bg-green-100 text-green-700',
            location: '마포구',
            time: '7시간 전',
            title: '홍대 근처 괜찮은 동물병원 추천 부탁드려요',
            excerpt:
                '강아지 예방접종 받으려고 하는데 좋은 곳 아시는 분 계신가요?',
            tags: ['동물병원', '홍대', '반려동물'],
            author: '댕댕이집사',
            avatar: '/placeholder.svg?height=40&width=40',
            views: 567,
            likes: 34,
            comments: 18,
            shares: 3,
            image: '/cute-dog-at-vet.jpg',
        },
        {
            id: 5,
            category: '일반 게시판',
            categoryColor: 'bg-blue-100 text-blue-700',
            location: '용산구',
            time: '1일 전',
            title: '이태원 맛집 리스트 공유합니다',
            excerpt: '5년 동안 살면서 찾은 진짜 맛집들만 모았어요.',
            tags: ['맛집', '이태원', '맛집리스트'],
            author: '맛집헌터',
            avatar: '/placeholder.svg?height=40&width=40',
            views: 3421,
            likes: 234,
            comments: 89,
            shares: 45,
            image: '/delicious-korean-food.jpg',
        },
        {
            id: 6,
            category: '소모임 모집',
            categoryColor: 'bg-purple-100 text-purple-700',
            location: '성동구',
            time: '1일 전',
            title: '성수동 독서 모임 멤버 모집 (매주 일요일)',
            excerpt: '책 좋아하시는 분들과 함께 독서하고 이야기 나눠요.',
            tags: ['독서', '소모임', '성수'],
            author: '책벌레',
            avatar: '/placeholder.svg?height=40&width=40',
            views: 1089,
            likes: 78,
            comments: 42,
            shares: 15,
            image: '/cozy-reading-space-books.jpg',
        },
    ];

    return (
        <BoardLayout
            title="내 동네 게시판"
            subtitle="우리 동네 소식과 정보를 나누는 공간"
        >
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <Card className="sticky top-4">
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-4">카테고리</h3>
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
                                    placeholder="게시글 검색..."
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
                                의 게시글
                            </p>
                            <Select defaultValue="latest">
                                <SelectTrigger className="w-32">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="latest">
                                        최신순
                                    </SelectItem>
                                    <SelectItem value="popular">
                                        인기순
                                    </SelectItem>
                                    <SelectItem value="comments">
                                        댓글순
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
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Badge
                                                            className={`${post.categoryColor} border-0`}
                                                        >
                                                            {post.category}
                                                        </Badge>
                                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                            <MapPin className="h-3 w-3" />
                                                            <span>
                                                                {post.location}
                                                            </span>
                                                        </div>
                                                        <span className="text-sm text-muted-foreground">
                                                            {post.time}
                                                        </span>
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
                                                                {post.author}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                            <div className="flex items-center gap-1">
                                                                <Eye className="h-4 w-4" />
                                                                <span>
                                                                    {post.views.toLocaleString()}
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
                                                            <div className="flex items-center gap-1">
                                                                <Share2 className="h-4 w-4" />
                                                                <span>
                                                                    {
                                                                        post.shares
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
