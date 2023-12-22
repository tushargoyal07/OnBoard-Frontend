import { nav } from './nav'
import { card } from '../Card'
export default function Page() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="flex flex-col">
                <div className="">
                    {nav()}
                </div>
                <div className='flex'>
                    {card()}
                </div>
            </nav>
        </div>
    )
}

