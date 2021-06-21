

using System;
using System.Diagnostics;
using System.Globalization;

namespace plattform
{
    class ApplicationPageValueConverter : BaseValueConverter<ApplicationPageValueConverter>
    {
        public override object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            switch ((ApplicationPage)value)
            {
                case ApplicationPage.Login:
                    return new Login();
                case ApplicationPage.Tab:
                    return new Tab();
                case ApplicationPage.CollapsipleMenu:
                    return new CollapsibleMenu();
                case ApplicationPage.HamburgerMenu:
                    return new HamburgerMenu();
                case ApplicationPage.OffCanvas:
                    return new OffCanvasMenu();
                case ApplicationPage.MultiLevelNavigation:
                    return new MultiLevelNavigation();
                case ApplicationPage.Navigationen:
                    return new Navigationen();
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
