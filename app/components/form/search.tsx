'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import {Button} from '@/components/ui/button';


const SearchForm = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const search = e.currentTarget.search.value as string;
        router.push(`/search?search=${search}`);
    }

    return (
        <form onSubmit={handleSubmit} method="GET" className="flex flex-row items-center justify-center">
            <input type="text" name='search' placeholder="Trouver le services dont vous avez besoin " className='p-[.45rem] border border-gray-300 rounded-l-md' />
            <Button type="submit" className='rounded-l-none onClick'>Rechercher</Button>
        </form>
    );
}

export default SearchForm;