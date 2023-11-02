import { useState, useEffect } from 'react';

type Props = {
    name: string;
    description?: string;
    image: string;
    altImage: string;
};

const Exercise = ({ name, description, image, altImage }: Props) => {
    
    const [isImage1Visible, setIsImage1Visible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImage1Visible((prevIsImage1Visible) => !prevIsImage1Visible);
    }, 2000); // 1 second interval (1000ms)

    return () => {
      clearInterval(interval);
    };
  }, []);

    
    const overlayStyles = `
        p-5 absolute z-30 flex 
        h-[380px] w-[450px] flex-col 
        items-center justify-center whitespace-normal 
        bg-primary-500 text-center text-white 
        opacity-0 transition duration-500 
        hover:opacity-90 `;

    const imageStyles = {
        transition: 'opacity 0.1s', // Adjust the speed (1s is 1 second)
        opacity: isImage1Visible ? 1 : 1,
        filter: 'grayscale(100%) contrast(300%)', //B&W styling
    };

  return (
    <li className="relative mx-5 inline-block h=[380px] w-[450px]">
        <div className={overlayStyles} >
            <p className="text-2xl" >{name}</p>
            <p className="mt-5" >{description}</p>
        </div>
        <div style={imageStyles}>
                <img alt={isImage1Visible ? image : altImage} src={isImage1Visible ? image : altImage} />
            </div>
    </li>
  );
};

export default Exercise