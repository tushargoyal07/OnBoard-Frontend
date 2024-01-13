'use client'

import Nav from './nav'
import Card from '../Card'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Ticket } from '@/types/ticket';



export default function Page() {


    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="">
                <div className="">
                    <Nav />
                </div>
                <div className='grid grid-col'>
                    <Card />
                </div>

            </nav>
        </div>
    )
}



