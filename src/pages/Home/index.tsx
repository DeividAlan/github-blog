import { Avatar, Description, HomeContainer, Info, Profile } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Profile>
        <Avatar src="https://avatars.githubusercontent.com/u/55552515?v=4" />
        <Description>
          <h1>Cameron Williamson</h1>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <Info>
            <span>cameronwll</span>
            <span>Rocketseat</span>
            <span>32 seguidores</span>
          </Info>
        </Description>
      </Profile>
    </HomeContainer>
  );
}
