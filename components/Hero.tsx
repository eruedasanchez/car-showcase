import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScrool = () => {
        // border-solid border-2 border-indigo-600
        // border-solid border-2 border-slate-600
    }

    return (
        <div className="hero my-32">
            <div className="flex-1 pt-3 padding-x">
                <h1 className="hero__title">Find, book or rent a car - quickly and easily</h1>
                <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process.</p>
                <CustomButton
                    title="Explore Cars"
                    containedStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScrool}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="hero__image-overlay"></div>
            </div>
        </div>
    )
}

export default Hero;