import Icon from '@chakra-ui/icon'
import { Text, Center, Box } from '@chakra-ui/layout'
import { useRadio } from '@chakra-ui/radio'
import React from 'react'
import { IconContext } from 'react-icons/lib'
import {
  IconWrapper,
  IconSelectionLabel,
  StyledIconSelection,
} from 'src/styled/IconSelection.styled'
import { VStack } from 'src/styled/utils'
import { InvisibleInput } from 'src/styled/utils/InvisibleInput.styled'
import theme from '../../theme/theme'

const IconSelection = props => {
  const { icon: Icon, label, radioName } = props
  console.log(label)
  return (
    <StyledIconSelection spacing="0.1rem">
      <InvisibleInput type="radio" name={radioName} />
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <IconSelectionLabel>{label}</IconSelectionLabel>
    </StyledIconSelection>

    // <Box as="label">
    //   <VStack role="group" cursor="pointer">
    //     <Center
    //       w="80px"
    //       h="80px"
    //       borderColor="gray.50"
    //       borderWidth="2px"
    //       borderRadius="10px"
    //       _groupHover={{
    //         borderColor: 'gray.400',
    //       }}
    //       _groupChecked={{
    //         borderColor: 'purple.400',
    //       }}
    //       // _groupFocus={{
    //       //   shadow: 'outline',
    //       // }}
    //       transition="all 0.1s ease-out"
    //     >
    //       <Icon
    //         as={icon}
    //         boxSize="60px"
    //         color="gray.300"
    //         _groupChecked={{ color: 'gray.700' }}
    //       />
    //     </Center>
    //     <Text
    //       fontSize="xs"
    //       color="gray.300"
    //       _groupChecked={{ color: 'gray.700' }}
    //     >
    //       {label}
    //     </Text>
    //   </VStack>
    // </Box>
  )
}

export default IconSelection
