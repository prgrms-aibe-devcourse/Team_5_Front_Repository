import { Header } from '@/src/components/header';
import { Footer } from '@/src/components/footer';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Avatar, AvatarFallback } from '@/src/components/ui/avatar';
import { Separator } from '@/src/components/ui/separator';
import {
    Eye,
    MessageCircle,
    Users,
    MapPin,
    Clock,
    Calendar,
    DollarSign,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GroupBuyingDetailPage({
    params,
}: {
    params: { id: string };
}) {
    // Mock data - in real app, fetch based on params.id
    const groupBuy = {
        id: params.id,
        category: '식품',
        categoryColor: 'bg-orange-100 text-orange-700',
        location: '강남구',
        time: '1시간 전',
        title: '코스트코 과일 공동구매 (3명 더 모집)',
        author: '과일러버',
        avatar: '/placeholder.svg?height=40&width=40',
        currentPeople: 7,
        targetPeople: 10,
        views: 234,
        comments: 12,
        status: '모집중',
        deadline: '2024년 12월 15일',
        price: '1인당 15,000원',
        meetingPlace: '강남역 2번 출구',
        meetingTime: '12월 15일 오후 2시',
        image: '/fresh-fruits-costco.jpg',
        description: `
안녕하세요! 이번 주말에 코스트코 가는데 과일 같이 사실 분 구합니다.

## 구매 예정 품목
- 딸기 (2팩)
- 블루베리 (3팩)
- 샤인머스캣 (2송이)
- 오렌지 (1박스)

## 1인당 예상 금액
약 15,000원 정도 예상됩니다.

## 만날 장소 및 시간
- 장소: 강남역 2번 출구
- 시간: 12월 15일 (토) 오후 2시
- 코스트코 양재점으로 함께 이동 예정

## 분배 방법
구매 후 현장에서 1/n로 나눠드립니다.
지퍼백 준비해오시면 좋아요!

## 참여 방법
아래 "참여하기" 버튼을 눌러 채팅방에 입장해주세요.
궁금한 점은 채팅방에서 편하게 물어보세요!

많은 참여 부탁드립니다 😊
    `,
    };

    const participants = [
        {
            name: '과일러버',
            role: '주최자',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        {
            name: '건강식',
            role: '참여자',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        {
            name: '과일좋아',
            role: '참여자',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        {
            name: '신선과일',
            role: '참여자',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        {
            name: '비타민',
            role: '참여자',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        {
            name: '과일마니아',
            role: '참여자',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        {
            name: '딸기러버',
            role: '참여자',
            avatar: '/placeholder.svg?height=40&width=40',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
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
                            <Link
                                href="/local/group-buying"
                                className="hover:text-foreground"
                            >
                                공동구매
                            </Link>
                            <span>/</span>
                            <span className="text-foreground">상세보기</span>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                {/* Post Header */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Badge
                                            className={`${groupBuy.categoryColor} border-0`}
                                        >
                                            {groupBuy.category}
                                        </Badge>
                                        <Badge
                                            variant={
                                                groupBuy.status === '모집중'
                                                    ? 'default'
                                                    : 'outline'
                                            }
                                            className="bg-green-500"
                                        >
                                            {groupBuy.status}
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">
                                            {groupBuy.time}
                                        </span>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                                        {groupBuy.title}
                                    </h1>

                                    {/* Author Info */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarFallback>
                                                    {groupBuy.author[0]}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium">
                                                    {groupBuy.author}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {groupBuy.time}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                        <div className="flex items-center gap-1">
                                            <Eye className="h-4 w-4" />
                                            <span>{groupBuy.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageCircle className="h-4 w-4" />
                                            <span>{groupBuy.comments}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="h-4 w-4 text-primary" />
                                            <span className="font-medium text-primary">
                                                {groupBuy.currentPeople}/
                                                {groupBuy.targetPeople}명
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Image */}
                                <div className="mb-8">
                                    <Image
                                        src={
                                            groupBuy.image || '/placeholder.svg'
                                        }
                                        alt={groupBuy.title}
                                        width={800}
                                        height={400}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>

                                <Separator className="mb-8" />

                                {/* Post Content */}
                                <div className="prose prose-lg max-w-none mb-8">
                                    <div className="whitespace-pre-line leading-relaxed">
                                        {groupBuy.description}
                                    </div>
                                </div>

                                <Separator className="mb-8" />

                                {/* Comments Section */}
                                <Card>
                                    <CardContent className="pt-6">
                                        <h3 className="text-xl font-semibold mb-6">
                                            댓글 {groupBuy.comments}
                                        </h3>
                                        <div className="space-y-6">
                                            {/* Comment Input */}
                                            <div className="flex gap-3">
                                                <Avatar>
                                                    <AvatarFallback>
                                                        나
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1">
                                                    <textarea
                                                        className="w-full min-h-[100px] p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                                                        placeholder="댓글을 입력하세요..."
                                                    />
                                                    <div className="flex justify-end mt-2">
                                                        <Button>
                                                            댓글 작성
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>

                                            <Separator />

                                            {/* Sample Comments */}
                                            <div className="space-y-6">
                                                <div className="flex gap-3">
                                                    <Avatar>
                                                        <AvatarFallback>
                                                            건
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="font-medium">
                                                                건강식
                                                            </span>
                                                            <span className="text-sm text-muted-foreground">
                                                                30분 전
                                                            </span>
                                                        </div>
                                                        <p className="text-sm leading-relaxed">
                                                            참여하고 싶어요!
                                                            채팅방 들어갔습니다~
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-3">
                                                    <Avatar>
                                                        <AvatarFallback>
                                                            과
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="font-medium">
                                                                과일좋아
                                                            </span>
                                                            <span className="text-sm text-muted-foreground">
                                                                20분 전
                                                            </span>
                                                        </div>
                                                        <p className="text-sm leading-relaxed">
                                                            딸기 좋아하는데
                                                            딱이네요!
                                                            참여할게요!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-4 space-y-4">
                                    {/* Join Card */}
                                    <Card className="border-primary">
                                        <CardContent className="pt-6">
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-muted-foreground">
                                                        모집 인원
                                                    </span>
                                                    <div className="flex items-center gap-1">
                                                        <Users className="h-4 w-4 text-primary" />
                                                        <span className="font-bold text-lg text-primary">
                                                            {
                                                                groupBuy.currentPeople
                                                            }
                                                            /
                                                            {
                                                                groupBuy.targetPeople
                                                            }
                                                            명
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="w-full bg-muted rounded-full h-2">
                                                    <div
                                                        className="bg-primary h-2 rounded-full transition-all"
                                                        style={{
                                                            width: `${
                                                                (groupBuy.currentPeople /
                                                                    groupBuy.targetPeople) *
                                                                100
                                                            }%`,
                                                        }}
                                                    />
                                                </div>

                                                <Separator />

                                                <div className="space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
                                                        <div>
                                                            <p className="text-sm text-muted-foreground">
                                                                1인당 금액
                                                            </p>
                                                            <p className="font-semibold">
                                                                {groupBuy.price}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                                                        <div>
                                                            <p className="text-sm text-muted-foreground">
                                                                마감일
                                                            </p>
                                                            <p className="font-semibold">
                                                                {
                                                                    groupBuy.deadline
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                                                        <div>
                                                            <p className="text-sm text-muted-foreground">
                                                                만날 장소
                                                            </p>
                                                            <p className="font-semibold">
                                                                {
                                                                    groupBuy.meetingPlace
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                                                        <div>
                                                            <p className="text-sm text-muted-foreground">
                                                                만날 시간
                                                            </p>
                                                            <p className="font-semibold">
                                                                {
                                                                    groupBuy.meetingTime
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <Separator />

                                                <Link
                                                    href={`/local/group-buying/${params.id}/chat`}
                                                >
                                                    <Button
                                                        className="w-full"
                                                        size="lg"
                                                    >
                                                        <MessageCircle className="h-5 w-5 mr-2" />
                                                        참여하기
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Participants Card */}
                                    <Card>
                                        <CardContent className="pt-6">
                                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                                <Users className="h-5 w-5" />
                                                참여자 ({participants.length}명)
                                            </h3>
                                            <div className="space-y-3">
                                                {participants.map(
                                                    (participant, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <Avatar className="h-8 w-8">
                                                                <AvatarFallback className="text-xs">
                                                                    {
                                                                        participant
                                                                            .name[0]
                                                                    }
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-medium truncate">
                                                                    {
                                                                        participant.name
                                                                    }
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    {
                                                                        participant.role
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
