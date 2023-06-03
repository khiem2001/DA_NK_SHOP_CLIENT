import NextImage, { ImageProps } from 'next/image';
import { useState } from 'react';

interface CustomImageProps {
  isMedia?: boolean;
  src?: any;
}

export default function Image(props: ImageProps & CustomImageProps & any) {
  let imageProps: ImageProps = { ...props };

  if (props?.isMedia) {
    const width = props.width || 300;
    const height = props.height || 1000;
    // @ts-ignore
    if (!props.src && props?.defaultImage) {
      imageProps.src = props?.defaultImage;
      // @ts-ignore
      delete imageProps.defaultImage;
    }

    // @ts-ignore
    delete imageProps.isMedia;
  }

  // const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <NextImage
      // className={`${!isLoaded && 'image-skeleton'} ${props?.className || ''}`}
      /* onLoadingComplete={() => {
                     setIsLoaded(true);
                   }}*/
      {...imageProps}
    />
  );
}
