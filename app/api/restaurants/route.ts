import { NextResponse } from 'next/server';

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

// Mock 데이터: 실제 백엔드 완성 전까지 사용
const MOCK: Restaurant[] = [
    {
        id: 1,
        rank: 1,
        name: '제주동화마을',
        category: '맛집',
        tags: ['제주식', '나홀로', '돌솥밥'],
        location: '제주시 나홀로(木), 제주시 돌(石)',
        image: '/jeju-restaurant.jpg',
        rating: 4.5,
        reviews: 234,
        lat: 33.450701,
        lng: 126.570667,
    },
    {
        id: 2,
        rank: 2,
        name: '수목원 야시장',
        category: '맛집',
        tags: ['제주식', '특색음식', '담이면'],
        location: '제주 특색 가득 담아낸 요리백',
        image: '/night-market.jpg',
        rating: 4.3,
        reviews: 189,
        lat: 33.450936,
        lng: 126.569477,
    },
    {
        id: 3,
        rank: 3,
        name: '에클잉포크한정식 본점',
        category: '식당',
        tags: ['한식', '제갈홍', '전통', '담이'],
        location: '시장님의 전원 담이접한 신선한 회와',
        image: '/korean-restaurant.jpg',
        rating: 4.7,
        reviews: 312,
        lat: 33.4516,
        lng: 126.5725,
    },
    {
        id: 4,
        rank: 4,
        name: '계절식당 함덕점',
        category: '식당',
        tags: ['손상겸', '년고스토힙', '담이'],
        location: '년고상차토힙, 년고스토힙',
        image: '/seasonal-restaurant.jpg',
        rating: 4.4,
        reviews: 156,
        lat: 33.4499,
        lng: 126.5719,
    },
    {
        id: 5,
        rank: 5,
        name: '김덕면으로킬',
        category: '맛집',
        tags: ['김버떠으킬', '담면', '전보인'],
        location: '만소시(안이터민 비다맙 찌기른 긴소우',
        image: '/noodle-restaurant.jpg',
        rating: 4.6,
        reviews: 278,
        lat: 33.4495,
        lng: 126.5698,
    },
];

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const keyword = (searchParams.get('keyword') ?? '').trim();
    const page = Math.max(1, Number(searchParams.get('page') ?? '1'));
    const size = Math.min(
        50,
        Math.max(1, Number(searchParams.get('size') ?? '10'))
    );

    let filtered = MOCK;
    if (keyword) {
        const lower = keyword.toLowerCase();
        filtered = MOCK.filter(
            (r) =>
                r.name.toLowerCase().includes(lower) ||
                r.category.toLowerCase().includes(lower) ||
                r.tags.some((t) => t.toLowerCase().includes(lower)) ||
                r.location.toLowerCase().includes(lower)
        );
    }

    const totalElements = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalElements / size));
    const start = (page - 1) * size;
    const end = start + size;
    const data = filtered.slice(start, end);

    return NextResponse.json({ data, page, size, totalElements, totalPages });
}
