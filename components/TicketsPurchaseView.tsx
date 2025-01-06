'use client'
import { TicketsPurchaseViewProps } from '@/interfaces/props/TicketsPurchaseViewProps';
import { faArrowLeft, faArrowLeftLong, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import TicketsPurchaseForm from './TicketsPurchaseForm';

interface Ticket {
    type: string;
    price: number;
    quantity: number;
}

const TicketsPurchaseView = (props: TicketsPurchaseViewProps) => {
    const [tickets, setTickets] = useState(
        props.data.tickets.map((ticket) => ({
            ...ticket,
            quantity: 0, // Initialize quantities to 0
        }))
    );

    const [total, setTotal] = useState(0); // State for total amount
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    // Function to update the quantity
    const updateQuantity = (index: number, increment: boolean) => {
        setTickets((prev) =>
            prev.map((ticket, i) =>
                i === index
                    ? {
                        ...ticket,
                        quantity: increment
                            ? Math.min(ticket.quantity + 1, ticket.avl_qty) // Ensure we don't exceed available quantity
                            : Math.max(ticket.quantity - 1, 0), // Ensure quantity is not negative
                    }
                    : ticket
            )
        );
    };

    // Calculate the total amount whenever tickets change
    useEffect(() => {
        const newTotal = tickets.reduce(
            (acc, ticket) => acc + ticket.quantity * ticket.price,
            0
        );
        setTotal(newTotal);
    }, [tickets]);

    return (
        <div className='fixed left-0 top-0 w-full h-full z-30 flex justify-center items-center'>
            <div className='absolute w-full h-full left-0 top-0 bg-black opacity-50'></div>
            {isDetailsOpen ?
                <div className='relative z-20 bg-white w-max h-max p-4 rounded-[15px] max-[1600px]:scale-90 max-[1366px]:scale-75 max-[950px]:scale-100'>
                    <div className='w-[496px] max-[950px]:w-[250px]'>
                        <FontAwesomeIcon icon={faArrowLeftLong} className='absolute left-4 top-4 cursor-pointer hover:scale-110 hover:text-black duration-300 text-xl  max-[950px]:text-lg max-[950px]:top-2 max-[950px]:left-2'
                            onClick={() => setIsDetailsOpen(false)}
                        />

                        <TicketsPurchaseForm />
                    </div>
                </div>
                :
                <>
                    <div className='relative bg-white w-max h-max p-4 rounded-[15px] flex max-[550px]:flex-col max-[550px]:scale-90 max-[1600px]:scale-90 max-[1366px]:scale-75 max-[950px]:hidden max-[550px]:flex z-10'>
                        <FontAwesomeIcon icon={faX} className='absolute right-4 top-4 cursor-pointer hover:scale-110 hover:text-black duration-300  max-[550px]:right-2  max-[550px]:top-2  max-[550px]:text-[10px]'
                            onClick={props.data.onClose}
                        />
                        <div className='relative w-[496px] aspect-[4/5] rounded-md max-[550px]:w-[250px]'>
                            <Image
                                src="/img/alexandria cover photo.jpeg"
                                alt='Alexandria'
                                layout='fill'
                                className='w-full h-full object-cover rounded-md'
                            />
                        </div>
                        <div className='w-[496px] max-[550px]:w-[250px] max-[550px]:mt-4 min-[550px]:pl-8 text-black flex flex-col'>
                            <div>
                                <h1 className='text-[32px] max-[550px]:text-base font-bold leading-8 max-[550px]:leading-4'>{props.data.event_name.toUpperCase()}</h1>
                                <h1 className='text-xl font-semibold italic leading-6 max-[550px]:text-xs max-[550px]:leading-3'>{props.data.event_theme_line}</h1>
                            </div>

                            <div className="">
                                <div className='pt-8  max-[950px]:pt-4 w-1/2 h-fit max-[550px]:inline-block max-[550px]:-pr-2:'>
                                    <h1 className='font-bold text-xl max-[550px]:text-xs max-[550px]:leading-3'>Date</h1>
                                    <h1 className='text-base font-normal max-[550px]:text-[10px] max-[550px]:leading-[11px]'>{formatDate(props.data.date)},</h1>
                                    <h1 className='text-base font-normal max-[550px]:text-[10px] max-[550px]:leading-[11px]'>{formatTime(props.data.date)}</h1>
                                </div>
                                <div className='pt-3 w-1/2 h-fit max-[550px]:inline-block max-[550px]:pl-2'>
                                    <h1 className='font-bold text-xl max-[550px]:text-xs max-[550px]:leading-3'>Place</h1>
                                    <h1 className='text-base font-normal max-[550px]:text-[10px] max-[550px]:leading-[11px]'>{props.data.place}</h1>
                                    <h1 className='text-base font-normal max-[550px]:text-[10px] max-[550px]:leading-[11px]'>{props.data.city}</h1>
                                </div>
                            </div>

                            <div className='pt-8 flex flex-col flex-grow justify-between max-[550px]:pt-4'>
                                <div className=''>
                                    <h1 className='font-bold text-xl max-[550px]:text-xs'>Tickets</h1>

                                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="border-b text-sm font-bold">
                                                    <th className="py-4 px-2 max-[550px]:py-2 max-[550px]:text-xs">Type</th>
                                                    <th className="py-4 px-2 max-[550px]:py-2 max-[550px]:text-xs">Price</th>
                                                    <th className="py-4 px-2 text-center max-[550px]:py-2 max-[550px]:text-xs">Qty</th>
                                                    <th className="py-4 px-2 text-right max-[550px]:py-2 max-[550px]:text-xs">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tickets.map((ticket, index) => (
                                                    <tr key={ticket.id} className="border-b text-sm">
                                                        <td className="py-2 px-2 max-[550px]:text-[10px]">{ticket.type}</td>
                                                        <td className="py-2 px-2 max-[550px]:text-[10px] max-[550px]:px-1 max-[550px]:py-1">{ticket.price.toLocaleString()} LKR</td>
                                                        <td className="py-2 px-2 text-center flex items-center justify-center gap-2  max-[550px]:text-[10px]  max-[550px]:gap-0  max-[550px]:px-1 max-[550px]:py-1">
                                                            <button
                                                                className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                                                                onClick={() => updateQuantity(index, false)}
                                                            >
                                                                −
                                                            </button>
                                                            <span className="font-semibold w-6 max-[550px]:text-[10px]">{ticket.quantity}</span>
                                                            <button
                                                                className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                                                                onClick={() => updateQuantity(index, true)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td className="py-2 px-2 text-right w-24 max-[550px]:text-[10px]  max-[550px]:px-1 max-[550px]:py-1">
                                                            {(ticket.quantity * ticket.price).toLocaleString()} LKR
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                                <div className='flex justify-between items-center max-[550px]:pt-4'>
                                    <div className=''>
                                        <h1 className='text-2xl font-bold inline-block mr-8  max-[550px]:text-xs'>Total</h1>
                                        <h1 className='text-[32px] font-bold inline-block  max-[550px]:text-[10px]min-w-40 max-[550px]:text-base'>{total} LKR</h1>
                                    </div>

                                    {/* <BuyTicketsBtn /> */}
                                    <div className='w-max h-max flex items-center justify-center'>
                                        {/* <button>Buy Ticket</button> */}
                                        <div className='rounded-lg'>
                                            <button className="button-89 !px-4 !py-2 hover:!px-4 hover:!py-2" role="button" onClick={() => setIsDetailsOpen(true)}>
                                                <span className='text-xl font-bold max-[550px]:text-[10px]'>Buy Tickets</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='relative bg-white w-max h-max p-4 rounded-[15px] flex max-[950px]:flex-col max-[950px]:scale-100 max-[1600px]:scale-90 max-[1366px]:scale-75 min-[950px]:hidden max-[550px]:hidden z-10'>
                        <FontAwesomeIcon icon={faX} className='absolute right-4 top-4 cursor-pointer hover:scale-110 hover:text-black duration-300' />
                        <div className='flex'>
                            <div className='relative w-[496px] aspect-[4/5] rounded-md max-[950px]:w-[250px]'>
                                <Image
                                    src="/img/alexandria cover photo.jpeg"
                                    alt='Alexandria'
                                    layout='fill'
                                    className='w-full h-full object-cover rounded-md'
                                />
                            </div>
                            <div className='w-[496px] max-[950px]:w-[250px] pl-4 text-black flex flex-col'>
                                <div>
                                    <h1 className='text-[32px] max-[950px]:text-xl font-bold leading-8 max-[950px]:leading-5'>{props.data.event_name.toUpperCase()}</h1>
                                    <h1 className='text-xl font-semibold italic leading-6 max-[950px]:text-base max-[950px]:leading-4'>{props.data.event_theme_line}</h1>
                                </div>

                                <div className='pt-8  max-[950px]:pt-4'>
                                    <h1 className='font-bold text-xl max-[950px]:text-base'>Date</h1>
                                    <h1 className='text-base font-normal max-[950px]:text-sm'>{formatDate(props.data.date)},</h1>
                                    <h1 className='text-base font-normal max-[950px]:text-sm'>{formatTime(props.data.date)}</h1>
                                </div>
                                <div className='pt-3'>
                                    <h1 className='font-bold text-xl  max-[950px]:text-base'>Place</h1>
                                    <h1 className='text-base font-normal max-[950px]:text-sm'>{props.data.place}</h1>
                                    <h1 className='text-base font-normal max-[950px]:text-sm'>{props.data.city}</h1>
                                </div>

                            </div>
                        </div>

                        <div className='pt-8 flex flex-col flex-grow justify-between max-[950px]:pt-4 text-black'>
                            <div className=''>
                                <h1 className='font-bold text-xl'>Tickets</h1>

                                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b text-sm font-bold">
                                                <th className="py-4 px-2">Type</th>
                                                <th className="py-4 px-2">Price</th>
                                                <th className="py-4 px-2 text-center">Qty</th>
                                                <th className="py-4 px-2 text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tickets.map((ticket, index) => (
                                                <tr key={ticket.id} className="border-b text-sm">
                                                    <td className="py-2 px-2">{ticket.type}</td>
                                                    <td className="py-2 px-2">{ticket.price.toLocaleString()} LKR</td>
                                                    <td className="py-2 px-2 text-center flex items-center justify-center gap-2">
                                                        <button
                                                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                                                            onClick={() => updateQuantity(index, false)}
                                                        >
                                                            −
                                                        </button>
                                                        <span className="font-semibold w-6">{ticket.quantity}</span>
                                                        <button
                                                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                                                            onClick={() => updateQuantity(index, true)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td className="py-2 px-2 text-right w-24"   >
                                                        {(ticket.quantity * ticket.price).toLocaleString()} LKR
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div className='flex justify-between items-center mt-4'>
                                <div className=''>
                                    <h1 className='text-2xl font-bold inline-block mr-8'>Total</h1>
                                    <h1 className='text-[32px] font-bold inline-block min-w-40'>{total} LKR</h1>
                                </div>

                                {/* <BuyTicketsBtn /> */}
                                <div className='w-max h-max flex items-center justify-center'>
                                    {/* <button>Buy Ticket</button> */}
                                    <div className='rounded-lg'>
                                        <button className="button-89" role="button" onClick={() => setIsDetailsOpen(true)}>
                                            <span className='text-xl font-bold'>Buy Tickets</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </>
            }
        </div>
    )
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    // Format the date
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short', // "Feb"
        day: '2-digit', // "01"
        year: 'numeric', // "2025"
        weekday: 'long', // "Saturday"
    });

    return formattedDate;
};

const formatTime = (dateString: string): string => {
    const date = new Date(dateString);

    // Format the time
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // 12-hour format with AM/PM
    });

    return formattedTime;
};

export default TicketsPurchaseView;
