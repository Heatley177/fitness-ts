import { SelectedPage, ClassType } from '@/shared/types'
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';


const classes: Array<ClassType> = [
    {
        name: 'RUSH',
        description: 'Our signature: RUSH is a 45-minute high-intensity interval class where you`ll push your body & mind to the max. Each class is unique & each coach will program a strength & conditioning workout where you`ll run, row, ski, bike, lift & so much more. Designed for all fitness levels, our dedicated coaches will support & challenge you to achieve just the rush you need.',
        image: image1,
    },
    {
        name: 'RUSH30',
        description: 'Less time = more intensity. This 30-minute twist on RUSH is designed for the busy individual who needs to maximize time & energy. You`ll increase your heart rate & your strength in this no-nonsense, mid-day burn & be out the door in 30, feeling good.',
        image: image2,
    },
    {
        name: 'RUSH60',
        description: 'Experience the ultimate RUSH. This 60-minute class incorporates the equipment & programming of RUSH, but takes it to the next level. More time to work means more opportunity to build strength, boost speed & endurance, and fortify your mental resolve. Confront the uncomfortable in this 1-hr battle of You vs You. Prior RUSH experience is recommended [2 classes]',
        image: image3,
    },
    {
        name: 'ALIGN',
        description: 'ALIGN is a creative 60-minute blend of mobility, strength & stretch. With 20 minutes in each segment, you`ll increase your range of motion, test your power & lengthen the muscles you just put to work. Prepare to challenge yourself, sweat & find that beautiful balance between strength & stability.',
        image: image4,
    },
    {
        name: 'AXIS',
        description: 'AXIS is a 60-min pilates-esque class that creates a central line of connection through breath work, intentional movement & form. Expect a strength based experience that works to increase stability, enhance athletic performance & boost range of motion through high reps & long, slow holds. When you build from a strong core of movement, you invite balance & alignment in mind, body & life.',
        image: image5,
    },
    {
        name: 'DEEP',
        description: 'DesDEEP I is a 6 person, 60-min Contrast Therapy class that will take you through breathwork, the Sisu outdoor sauna & Morozko Forge ice bath. You will be guided by an experienced coach & build resilience well beyond the class. Expect two rounds of sauna & ice bath in this experience, or join us for DEEP30, a 30-min express class with one round the sauna & cold plunge.',
        image: image6,
    },
];


type Props = {
    setSelectedPage: (value: SelectedPage ) => void;
}


const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
        className='w-full bg-primary-100 py-40'
        id='ourclasses'
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
            >
                <div className='md:w-3/5' >
                    <HText>
                        OUR CLASSES
                    </HText>
                    <p className='py-5 ' >
                    Ethos Athletic Club is home - where nothing is given, only earned. It is our passion to elevate your daily routines through strength, movement and mindset. Here, you own your greatness.
                    </p> 
                </div>
            </motion.div>
            
            {/* MAKE THIS AUTO SCROLL AS WELL */}
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden' >
                <ul className='w-[2800px] whitespace-nowrap' >
                    {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                      />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses