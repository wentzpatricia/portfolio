import { useTranslation } from '../../hooks/useTranslation';

export function LanguageToggle() {
  const { currentLanguage, changeLanguage } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    changeLanguage(newLanguage);
  };

  return (
    <button
      type="button"
      className="p-2 hover:bg-medium-red-violet-800/50 cursor-pointer border border-medium-red-violet-950/20 rounded-lg transition-colors"
      onClick={toggleLanguage}
      title={currentLanguage === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <span className="text-sm font-medium text-medium-red-violet-700">
        {currentLanguage === 'pt' ? 'EN' : 'PT'}
      </span>
    </button>
  );
}
