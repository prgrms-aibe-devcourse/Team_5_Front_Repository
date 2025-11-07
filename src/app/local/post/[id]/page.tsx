import { Header } from '@/src/components/header';
import { Footer } from '@/src/components/footer';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Avatar, AvatarFallback } from '@/src/components/ui/avatar';
import { Separator } from '@/src/components/ui/separator';
import { Eye, MessageCircle, Heart, Share2, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function LocalPostDetailPage({
    params,
}: {
    params: { id: string };
}) {
    // Mock data - in real app, fetch based on params.id
    const post = {
        id: params.id,
        category: '동네소식',
        location: '강남구',
        time: '1시간 전',
        title: '강남역 근처 새로 생긴 맛집 추천해요',
        author: '강남러버',
        views: '543',
        comments: '32',
        likes: '15',
        content: `
안녕하세요! 강남에서 5년째 살고 있는 강남러버입니다.

어제 강남역 근처에 새로 생긴 맛집을 다녀왔는데 너무 좋아서 공유합니다!

## 가게 정보

- 이름: 혼밥천국
- 위치: 강남역 3번 출구에서 도보 5분
- 영업시간: 11:00 - 22:00 (브레이크타임 15:00-17:00)
- 가격대: 8,000원 - 15,000원

## 추천 메뉴

### 1. 김치찌개 (8,000원)
정말 맛있어요! 김치가 잘 익어서 깊은 맛이 나고, 고기도 푸짐하게 들어있습니다.

### 2. 제육볶음 (9,000원)
매콤하면서도 달콤한 맛이 일품입니다. 밥 한 공기 뚝딱!

### 3. 된장찌개 (8,000원)
구수한 된장 맛이 일품이에요. 반찬도 정갈하게 잘 나옵니다.

## 분위기

혼자 오기 좋게 1인석도 많고, 조용해서 식사하기 편해요.
직원분들도 친절하시고, 가게도 깨끗합니다.

## 총평

혼자 밥 먹기 좋은 곳을 찾으시는 분들께 강력 추천합니다!
가격도 합리적이고 맛도 좋아서 자주 갈 것 같아요.

여러분도 한번 가보세요! 후회 안 하실 거예요 😊
    `,
    };

    const relatedPosts = [
        {
            id: 2,
            category: '밥친구',
            location: '마포구',
            title: '홍대에서 저녁 같이 드실 분 구해요',
            author: '홍대주민',
        },
        {
            id: 4,
            category: '동네소식',
            location: '성동구',
            title: '성수동 카페 투어 같이 하실 분',
            author: '카페러',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumb */}
                        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-foreground">
                                홈
                            </Link>
                            <span>/</span>
                            <Link
                                href="/local"
                                className="hover:text-foreground"
                            >
                                로컬 커뮤니티
                            </Link>
                            <span>/</span>
                            <span className="text-foreground">게시글</span>
                        </div>

                        {/* Post Header */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Badge variant="secondary">
                                    {post.category}
                                </Badge>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin className="h-3 w-3" />
                                    <span>{post.location}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">
                                    {post.time}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                                {post.title}
                            </h1>

                            {/* Author Info */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarFallback>
                                            {post.author[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">
                                            {post.author}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {post.time}
                                        </p>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm">
                                    팔로우
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    <span>{post.views}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageCircle className="h-4 w-4" />
                                    <span>{post.comments}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Heart className="h-4 w-4" />
                                    <span>{post.likes}</span>
                                </div>
                            </div>
                        </div>

                        <Separator className="mb-8" />

                        {/* Post Content */}
                        <div className="prose prose-lg max-w-none mb-8">
                            <div className="whitespace-pre-line leading-relaxed">
                                {post.content}
                            </div>
                        </div>

                        <Separator className="mb-8" />

                        {/* Action Buttons */}
                        <div className="flex items-center justify-center gap-4 mb-12">
                            <Button
                                variant="outline"
                                size="lg"
                                className="gap-2 bg-transparent"
                            >
                                <Heart className="h-5 w-5" />
                                좋아요 {post.likes}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="gap-2 bg-transparent"
                            >
                                <Share2 className="h-5 w-5" />
                                공유하기
                            </Button>
                        </div>

                        {/* Comments Section */}
                        <Card className="mb-12">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-semibold mb-6">
                                    댓글 {post.comments}
                                </h3>
                                <div className="space-y-6">
                                    {/* Comment Input */}
                                    <div className="flex gap-3">
                                        <Avatar>
                                            <AvatarFallback>나</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <textarea
                                                className="w-full min-h-[100px] p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                                                placeholder="댓글을 입력하세요..."
                                            />
                                            <div className="flex justify-end mt-2">
                                                <Button>댓글 작성</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* Sample Comments */}
                                    <div className="space-y-6">
                                        <div className="flex gap-3">
                                            <Avatar>
                                                <AvatarFallback>
                                                    맛
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="font-medium">
                                                        맛집헌터
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">
                                                        30분 전
                                                    </span>
                                                </div>
                                                <p className="text-sm leading-relaxed mb-2">
                                                    오 저도 어제 거기 갔는데
                                                    진짜 맛있더라구요! 김치찌개
                                                    강추합니다 👍
                                                </p>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="gap-1"
                                                >
                                                    <Heart className="h-3 w-3" />
                                                    좋아요 8
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <Avatar>
                                                <AvatarFallback>
                                                    강
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="font-medium">
                                                        강남직장인
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">
                                                        15분 전
                                                    </span>
                                                </div>
                                                <p className="text-sm leading-relaxed mb-2">
                                                    점심시간에 가면 사람 많나요?
                                                </p>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="gap-1"
                                                >
                                                    <Heart className="h-3 w-3" />
                                                    좋아요 3
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Related Posts */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">
                                관련 게시글
                            </h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        href={`/local/post/${relatedPost.id}`}
                                    >
                                        <Card className="h-full hover:shadow-lg transition-shadow">
                                            <CardContent className="pt-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Badge variant="secondary">
                                                        {relatedPost.category}
                                                    </Badge>
                                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                        <MapPin className="h-3 w-3" />
                                                        <span>
                                                            {
                                                                relatedPost.location
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <h4 className="font-semibold mb-2 line-clamp-2 text-balance">
                                                    {relatedPost.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {relatedPost.author}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
