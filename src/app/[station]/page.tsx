import Link from 'next/link'
import { Suspense } from 'react'
import StationView from '../../components/station-view'
import TablePlaceholder from '../../components/table-placeholder'
import ExpandingArrow from '../../components/expanding-arrow'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Station({
    params
}: Readonly<{
    params: { station: string };
}>) {

    return (
        <main className="relative flex min-h-screen flex-col items-center m-20">
            <Link
                href="https://github.com/TuukkaAro/dev-academy-spring-2024-exercise"
                className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
            >
                <p>Tuukka Aro</p>
                <ExpandingArrow />
            </Link>
            <Link
                href="/"
            >
                <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-3xl">
                    Home
                </h1>
            </Link>
            <Suspense fallback={<TablePlaceholder />}>
                <StationView stationId={params.station} />
            </Suspense>
        </main>
    )
}