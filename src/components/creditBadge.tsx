/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved
 */

//Imports
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hoverCard";
import {Link} from "lucide-react";

const CreditBadge = () => {
    return (
        <div className='font-aptos text-white text-sm'>
            <HoverCard>
                <HoverCardTrigger className='bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-900'>
                    Photo Credit
                </HoverCardTrigger>
                <HoverCardContent className='w-180 h-12 mr-2 pb-9 font-cascadia'>
                    <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                            <p className="text-sm">
                                Photo by -&ensp;
                                <a href='https://unsplash.com/@choys_' className='italic'>
                                    @Conny Schneider
                                </a>
                                &ensp;on&ensp;
                                <a href="https://unsplash.com/photos/a-blue-background-with-lines-and-dots-xuTJZ7uD7PI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className='inline-flex'>
                                    Unsplash<Link className="w-3 h-3" />
                                </a>
                            </p>
                            <div className="flex items-center pt-2">

                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}

export default CreditBadge;