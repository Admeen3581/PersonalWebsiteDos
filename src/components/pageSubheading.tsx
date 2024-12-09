/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved
 */

//Imports
import GradualSpacing from "@/components/ui/gradualSpacing";

const PageSubheading = ({pageTitle, funnyTitle} : {pageTitle : string, funnyTitle : string}) => {

    let grayBarWidth = 0;//Dynamic width

    for(let i=0; i<funnyTitle.length; i++)
    {
        if (funnyTitle.at(i) !== 'i' && funnyTitle.at(i) !== '\'')
        {
            grayBarWidth+=2;
        } else {
            grayBarWidth++;
        }
    }

    return (
        <div className='grid grid-cols-5 pt-20 ml-16'>
            <div className='flex flex-col items-start'>
                <GradualSpacing
                    text={pageTitle.toUpperCase()}
                    className="font-display text-sm text-white font-avalors shadow-inner"
                    duration={2.0}
                />
                <br/>
                <div
                    className={`bg-gray-900 h-1`}
                    style={{ width: `${grayBarWidth}em` }} //Dynamic width
                />
                <br/>
                <GradualSpacing
                    text={funnyTitle.toLowerCase()}
                    className="font-display text-3xl text-white font-avalors shadow-inner"
                    duration={2.0}
                />
            </div>
        </div>
    );
}

export default PageSubheading;