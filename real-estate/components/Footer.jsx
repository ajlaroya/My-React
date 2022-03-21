import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100" fontWeight="bold">
        Acres, Inc. <br/>
        <Text fontSize='xs' fontWeight="normal" >
            © 2022 ARTHUR LAROYA <br/>
            ALL RIGHTS RESERVED
        </Text>
    </Box>
  )
}

export default Footer