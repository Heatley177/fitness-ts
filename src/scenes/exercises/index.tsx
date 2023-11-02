import { SelectedPage, ExerciseType } from '@/shared/types'
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Exercise from './Exercise';
import pushupUP from '@/assets/pushupUP.png';
import pushupDOWN from '@/assets/pushupDOWN.png';
import extpushUP from '@/assets/extpushUP.png';
import extpushDOWN from '@/assets/extpushDOWN.png';
import squatUP from '@/assets/squatUP.png';
import squatDOWN from '@/assets/squatDOWN.png';
import dbpressDOWN from '@/assets/dbpressDOWN.png';
import dbpressUP from '@/assets/dbpressUP.png';
import shoulderUP from '@/assets/shoulderUP.png';
import shoulderDOWN from '@/assets/shoulderDOWN.png';
import situpDOWN from '@/assets/situpDOWN.png';
import situpUP from '@/assets/situpUP.png';


import { useState, useEffect, useRef } from 'react';

// TODO
// FIND EXERCISE IMAGES
// TODO
const exercises: Array<ExerciseType> = [
    {
        name: 'EASY EXERCISES',
        description: 'When you rest, your muscles start to heal and grow back stronger, meaning you`ll be able to do the same workout with less effort in the future. If you skip rest days, it could lead to longer spells out through injury.',
        image: pushupUP,
        altImage: pushupDOWN,
    },
    {
        name: 'ADVANCED EXERCISES',
        description: 'Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities',
        image: extpushUP,
        altImage: extpushDOWN,
    },
    {
        name: 'LEGS',
        description: 'The squat is considered by many to be the most important exercise. Although many people favor either the bench press or hip and abdominal exercises, the free squat—a squat that is done without any equipment or machines—is a simple yet extremely effective exercise.',
        image: squatUP,
        altImage: squatDOWN,
    },
    {
        name: 'CHEST',
        description: 'The dumbbell press allows you to specifically target chest muscles, giving you greater strength and definition. Because you have to balance the dumbbells individually, it also contributes to strong core development. You can do dumbbell presses on a standard flat weight bench or overhead while standing. Variations of the dumbbell press add depth to your workout routine.',
        image: dbpressUP,
        altImage: dbpressDOWN,
    },
    {
        name: 'SHOULDERS',
        description: 'The shoulder press is an upper-body exercise that targets muscles such as the trapezoid, the deltoids, and the triceps. It`s a fantastic activity for beginners and veterans alike, as it improves overall strength and posture and decreases the risk for osteoporosis.',
        image: shoulderUP,
        altImage: shoulderDOWN,
    },
    {
        name: 'ABS',
        description: 'Regular sit-ups can get pretty boring and repetitive—plus, they require some extra effort from your hip flexors and thighs. If you’d like a change of pace, look no further than the butterfly sit-up, which really lets your abs, or rectus abdominis muscle, take center stage instead.',
        image: situpUP,
        altImage: situpDOWN,
    },
];


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const Exercises = ({ setSelectedPage }: Props) => {
    const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const carouselRef = useRef(null);
    const itemWidth = 280; // Adjust this width as needed for your items
    const numItems = exercises.length;
    const scrollableWidth = itemWidth * numItems;

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (!isHovered) {
                setCurrentScrollPosition((prevPosition) => {
                    const newPosition = (prevPosition + 1) % scrollableWidth;
                    if (newPosition === 0) {
                        return newPosition; // Reset the position to 0
                    }
                    return newPosition;
                });
            }
        }, 50);

        return () => {
            clearInterval(scrollInterval);
        };
    }, [isHovered, scrollableWidth]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <section
            className='w-full bg-primary-100 py-40'
            id='exercises'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Exercises)}
            >
                <motion.div
                    className='mx-auto w-5/6'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='md:w-3/5' >
                        <HText>
                            IN-APP EXERCISES
                        </HText>
                        <p className='py-5 ' >
                            Ethos Athletic Club offers many app led exercises for use in the comfort of your home, hotel, or travel for when you're simply too busy to make it to the gym. It is our passion to elevate your daily routines through strength, movement and mindset.
                        </p>
                    </div>
                </motion.div>
                {/* CAROUSEL BELOW */}
                {/* BUG - KNOWN ISSUE - When animation ends there is a large gap before it loops through again
                the goal is to create in infinite loop that is scrollable and pauses upon hover.
                TEMP FIX - animation slowed and <Exercise /> duplicated to make jump less obvious
                    -on scrolling large gap at end appears
            */}
                <div
                    className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden relative'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={carouselRef}
                >
                    <ul
                        style={{ transform: `translateX(-${currentScrollPosition}px)` }}
                        className='w-[2800px] whitespace-nowrap' >
                        {exercises.map((item: ExerciseType, index) => (
                            <Exercise
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                                altImage={item.altImage}
                            />
                        ))}
                        {exercises.map((item: ExerciseType, index) => (
                            <Exercise
                                key={`duplicate-${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                                altImage={item.altImage}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default Exercises