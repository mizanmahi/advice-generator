import React, { useEffect, useState } from 'react';
import divider from '../assets/pattern-divider.svg';
import dice from '../assets/icon-dice.svg';
import axios from 'axios';

const Advice = () => {
   const [adviceData, setAdviceData] = useState({});
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const { id, advice } = adviceData;

   const fetchAdvice = async () => {
      try {
         setLoading(true);
         const { status, data } = await axios.get(
            'https://api.adviceslip.com/advice'
         );

         if (status === 200) {
            setAdviceData(data.slip);
            setLoading(false);
            setError(null);
         }
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   };

   useEffect(() => {
      if (!id) {
         fetchAdvice();
      }
   }, []);

   return (
      <div className='dark:bg-darkGrayishBlue bg-white shadow-sm  w-100 max-w-md p-6 sm:p-10 rounded-lg text-center text-lightCyan flex flex-col gap-4 relative'>
         <p className='text-sm dark:text-neonGreen text-darkBlue tracking-[.25em] uppercase font-bold'>
            advice #{id}
         </p>
         <blockquote>
            <p className='text-2xl text-darkGrayishBlue dark:text-lightCyan'>
               " {advice} "
            </p>
         </blockquote>
         <img src={divider} alt='divider' className='pb-4' />

         <button
            onClick={fetchAdvice}
            className='cursor-pointer w-12 h-12 bg-white shadow-sm border-2 dark:border-0 dark:border-transparent border-neutral-100 dark:bg-neonGreen flex items-center justify-center rounded-full absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 dark:hover:neon-green-shadow'
            disabled={loading}
         >
            <img
               src={dice}
               alt='dice'
               className={`w-5  ${loading ? 'animate-spin' : ''}`}
            />
         </button>
      </div>
   );
};

export default Advice;
