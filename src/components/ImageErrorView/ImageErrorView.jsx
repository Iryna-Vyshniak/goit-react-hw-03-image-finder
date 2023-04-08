import errorImage from 'assets/error-1.png';
import { ErrorImg, Text, Wrapper } from './ImageErrorView.styled';

export default function ImageErrorView({ message }) {
  return (
    <Wrapper role="alert">
      <ErrorImg src={errorImage} width="240" alt="Mr Peabody and Sherman" />
      <Text>{message}</Text>
    </Wrapper>
  );
}
