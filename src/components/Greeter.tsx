interface personProps {
  person: string;
}

export function Greeter({ person }: personProps): JSX.Element {
  return <h1>Hello {person}</h1>;
}
