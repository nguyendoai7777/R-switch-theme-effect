import { FC } from 'react';
import useThemeAnimation from '../../utils/hooks/use-theme-animation';

export type ThemeName = 'light' | 'dark';
export interface ThemeSwitchProps {
	value?: ThemeName;
	onChange: (value: ThemeName) => void;
}

const ThemeSwitcher: FC<ThemeSwitchProps> = ({ onChange, value = 'light' }) => {
	const isDark = value === 'dark';
  const toggleAnimationTheme = useThemeAnimation();
	const changeTheme = (e: any) => {
    toggleAnimationTheme(e, isDark)
		if (isDark) {
			onChange('light');
		} else {
			onChange('dark');
		}
	};
	return (
		<>
			<button onClick={changeTheme}>Toggle Theme = {value}</button>
		</>
	);
};
export default ThemeSwitcher;
