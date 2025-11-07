'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import { Textarea } from '@/src/components/ui/textarea';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/src/components/ui/select';

export default function WritePostPage() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('꿀팁');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now just log the data; later this will POST to backend
        console.log({
            title,
            category,
            tags: tags
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean),
            content,
        });
        // Redirect back to onelife listing
        router.push('/onelife');
    };

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <Card>
                    <CardHeader className="p-6">
                        <CardTitle className="text-2xl">
                            혼라이프 글쓰기
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium">
                                    제목
                                </label>
                                <Input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="게시글 제목을 입력하세요"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        카테고리
                                    </label>
                                    <Select
                                        value={category}
                                        onValueChange={(v) => setCategory(v)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="꿀팁">
                                                꿀팁
                                            </SelectItem>
                                            <SelectItem value="혼밥">
                                                혼밥
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        태그 (쉼표로 구분)
                                    </label>
                                    <Input
                                        value={tags}
                                        onChange={(e) =>
                                            setTags(e.target.value)
                                        }
                                        placeholder="#절약, #요리"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium">
                                    내용
                                </label>
                                <Textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="min-h-[200px]"
                                    placeholder="본문을 작성하세요"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-3">
                                <Button
                                    variant="ghost"
                                    type="button"
                                    onClick={() => router.push('/onelife')}
                                >
                                    취소
                                </Button>
                                <Button type="submit">저장</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
