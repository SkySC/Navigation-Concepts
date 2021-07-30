

using System;
using System.Diagnostics;
using System.Globalization;



/// <summary>
/// Value Converter konvertiert den Inhalt der Seite im Frame
/// </summary>
namespace plattform
{
    class ApplicationPageValueConverter : BaseValueConverter<ApplicationPageValueConverter>
    {
        public override object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            switch ((ApplicationPage)value)
            {
                case ApplicationPage.Login:
                    WindowViewModel.PlayerCard = 0;
                    return new Login();
                case ApplicationPage.Tab:
                    return new Tab();
                case ApplicationPage.Songlist:
                    return new Songlist();
                case ApplicationPage.Register:
                    WindowViewModel.PlayerCard = 0;
                    return new Register();
                case ApplicationPage.MainMenu:
                    WindowViewModel.PlayerCard = 70;
                    return new MainMenu();
                default:
                    Debugger.Break();
                    return null;
            }
        }

        public override object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
