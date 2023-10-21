import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon 
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: 
            "Whether it’s a trip to the steam room after yoga, or a post-workout detox session in our Sweatheory sauna, carve out a few extra minutes so you can recover faster & win the day."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: 
            "It is our passion to elevate your daily routines through strength, movement and mindset."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: 
            "Whether it`s 1-on-1 training for an event or life itself, or small group training, your trainer will work with you to create a plan that’s specific to your needs."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

// FOR IMAGES TO BE IN B&W FOR FUTURE USE
// const blackAndWhiteStyle = {
//         filter: 'grayscale(100%)',
//     };


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section 
        id='benefits'
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits) }
        >
        {/* HEADER */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText>
                    MORE THAN JUST A GYM.
                </HText>
                <p className="my-5 text-sm" >
                We provide world class fitness equipment, trainers and classes to
                get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
                </p>
            </motion.div>

        {/* BENEFITS */}
            <motion.div className="md:flex items-center justify-between gap-8 mt-5 " 
                initial='hidden'
                whileInView={'visible'}
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
            <div
                className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"
            >
                {/* GRAPHIC */}
                <img 
                    className="mx-auto"
                    alt='benefits-page-graphic'
                    src={BenefitsPageGraphic}
                    // style={blackAndWhiteStyle}
                />
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative" >
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves" >
                            <motion.div
                                initial='hidden'
                                whileInView='visible'
                                viewport={{once: true, amount: 0.5 }} 
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}

                            >
                                <HText>
                                "THE DISTINCTIVE SPIRIT OF A CULTURE OR COMMUNITY AS MANIFESTED IN ITS BELIEFS, BEHAVIOR & {" "}
                                <span className="text-primary-500" > ASPIRATIONS</span>."
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPT */}
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true, amount: 0.5 }} 
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="my-5" >
                            Ethos is more than a feeling - we are a culture, an energy & a moral character that is rooted in integrity, discipline & growth. From that work ethic & foundation, we build. The work we do, the members we sweat alongside & the team we consider family are part of our core. This effort doesn't wash off with your post-workout shower. It lingers. It leaves you with a power & vitality that are unparalleled!
                        </p>
                        <p className="mb-5" >
                            We are all one team! Everyone at Ethos is here to make a difference, both within & beyond our walls. Our coaches, trainers & staff support your daily grind, as well as your break-through moments.
                        </p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16" >
                        <div 
                            className=" before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles "
                        >
                            <ActionButton setSelectedPage={setSelectedPage} >
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits