import React from "react";
import {FaWindows, FaPlaystation, FaXbox, FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import { Platform } from "../hooks/useGames";
import { HStack, Text } from "@chakra-ui/react";
import{ MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs'
import { Icon, } from "@chakra-ui/react";
import { IconType } from "react-icons";



interface Props {
  platforms: Platform[];
}

const PlatformiconList = ({ platforms }: Props) => {
  const iconMap :{[key:string]:IconType}={
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    }
  return (
    <HStack marginY={1} paddingTop='7.5px'>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='grey'/>

      ))}
    </HStack>
  );
};

export default PlatformiconList;
