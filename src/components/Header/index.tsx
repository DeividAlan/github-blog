import { Effect, HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';
import effectLeft from '../../assets/effect-left.svg';
import effectRight from '../../assets/effect-right.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <span>GITHUB BLOG</span>
      <Effect>
        <img id="svg-left" src={effectLeft} alt="" />
        <img id="svg-right" src={effectRight} alt="" />
      </Effect>
    </HeaderContainer>
  );
}
