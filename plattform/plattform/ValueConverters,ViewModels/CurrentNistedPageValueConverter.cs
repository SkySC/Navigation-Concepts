using System;
using System.Diagnostics;
using System.Globalization;

namespace plattform
{
    class CurrentNistedPageValueConverter : BaseValueConverter<ApplicationPageValueConverter>
    {
        public override object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            switch ((ApplicationPage)value)
            {
                case ApplicationPage.Startseite:
                    return new Startseite();
                case ApplicationPage.Kategorie:
                    return new kategoie();
                case ApplicationPage.Library:
                    return new Library();
                case ApplicationPage.Songlist:
                    return new Songlist();
               

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
