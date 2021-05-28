
using System.Windows;

namespace plattform
{
    public class WindowViewModel 
    {
        private Window mw;
        public WindowViewModel(Window window)
        {
            mw = window;
        }
        public static ApplicationPage CurrentPage { get; set; } = ApplicationPage.Login;
    }
}
