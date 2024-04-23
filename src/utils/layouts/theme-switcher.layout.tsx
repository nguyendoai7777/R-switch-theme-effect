import ThemeSwitcher from '../../pages/theme-switcher/theme-switcher.component';
import useLayoutState from '../hooks/use-layout';

function GlobalLayout() {
	const getTheme = localStorage.getItem('theme') ?? 'light';
	const [{ theme = getTheme }, setSiteState] = useLayoutState<any>({
		theme: getTheme,
	});
  

	return (
		<>
			<ThemeSwitcher
				value={theme}
				onChange={(nextTheme) => {
          localStorage.setItem('theme', nextTheme)
					setSiteState({ theme: nextTheme });
				}}
			/>
		</>
	);
}
export default GlobalLayout;
