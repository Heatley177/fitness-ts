import EvolveText from '@/assets/EvolveText.png'


const Footer = () => {
    return (
        <footer className="bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row lg:flex-row justify-between space-y-8 md:space-y-0 lg:space-y-0">
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <h2 className="text-white text-lg font-semibold">
                            Location
                        </h2>
                        <p className="text-gray-400">
                            555 SAMPLE Street<br />
                            CTY — STATE, 55555
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <h2 className="text-white text-lg font-semibold">
                            Hours
                        </h2>
                        <p className="text-gray-400">
                            MON – THUR: 5AM – 8PM<br />
                            FRI: 5AM – 7PM<br />
                            SAT: 6AM – 5PM<br />
                            SUN: 7AM – 5PM
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <h2 className="text-white text-lg font-semibold">Contact</h2>
                        <p className="text-gray-400">
                            <a href="mailto:info@ethosathleticclub.com">SAMPLE@email.com</a><br />
                            <a href="tel:555.555.555">555.555.5555</a>
                        </p>
                        <div className="mt-4 flex items-center ">
                            <ul className='flex space-x-4' >
                                <li>
                                    <a href="https://www.facebook.com/pages/category/Gym-Physical-Fitness-Center/Ethos-Athletic-Club-106548158037309/">
                                        <img
                                            src="https://ethosathleticclub.com/wp-content/themes/ethos-2021/dist/images/icon-facebook.svg"
                                            alt="Facebook icon"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ethos_ac/?hl=en">
                                        <img
                                            src="https://ethosathleticclub.com/wp-content/themes/ethos-2021/dist/images/icon-instagram.svg"
                                            alt="Instagram icon"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UC-GBPGMyJDzdQ-5MB1Vta5w">
                                        <img
                                            src="https://ethosathleticclub.com/wp-content/themes/ethos-2021/dist/images/icon-youtube.svg"
                                            alt="YouTube icon"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            // src="https://ethosathleticclub.com/wp-content/themes/ethos-2021/dist/images/logo-footer.svg"
                            src={EvolveText}
                            alt="Logo"
                            className='sm:w-full sm:pt-10 md:w-full'
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer