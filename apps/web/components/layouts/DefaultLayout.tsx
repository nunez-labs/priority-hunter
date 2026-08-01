//Este layout unicamente es de toda una página. No contiene nada mas.
//Otros layout son para diferentes aspectos.
const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
	return <div>{children}</div>;
};

export { DefaultLayout };
