import Link from 'next/link'
import { Suspense } from 'react'
import Table from '../components/table'
import TablePlaceholder from '../components/table-placeholder'
import ExpandingArrow from '../components/expanding-arrow'

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col items-center m-20">
            <Link
                href="https://github.com/TuukkaAro/dev-academy-spring-2024-exercise"
                className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
            >
                <p>Tuukka Aro</p>
                <ExpandingArrow />
            </Link>
            <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                dev-academy-spring-2024-exercise
            </h1>
            <Suspense fallback={<TablePlaceholder />}>
                <Table />
            </Suspense>
        </main>
    )
}