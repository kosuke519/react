import { VFC, memo, useState, ChangeEvent } from 'react';
import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { UseAuth } from '../../hooks/UseAuth';

export const Login: VFC = memo(() => {
  const { login, loading } = UseAuth();
  const [userId, setUserId] = useState('');
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ''}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
