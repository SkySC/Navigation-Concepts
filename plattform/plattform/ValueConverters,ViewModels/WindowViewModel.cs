
using System.Collections.Generic;
using System.Windows;

namespace plattform
{
    public class WindowViewModel
    {
        private Window mw;
        
        public WindowViewModel(Window window)
        {
            mw = window;
            mw.MaxHeight = SystemParameters.MaximizedPrimaryScreenHeight;
            mw.MaxWidth = SystemParameters.MaximizedPrimaryScreenWidth;
        }
        public static ApplicationPage CurrentPage { get; set; } = ApplicationPage.Login;
        public static ApplicationPage CurrentNistedPage { get; set; } = ApplicationPage.Songlist;
        public static List<string> History { get; set; } = new List<string>();
        public static void AddToHistory(string value)
        {
            History.Add(value);
        }

        public int Border { get; set; } = 5;
        public Thickness ResizeBorderThickness{get{ return new Thickness(Border); } }
        
        public static string SearchText { get; set; }
        public static int PlayerCard { get; set; } = 0;

    }

}
