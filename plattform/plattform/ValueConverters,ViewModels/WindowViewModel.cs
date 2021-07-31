
using System.Collections.Generic;
using System.ComponentModel;
using System.Windows;




/// <summary>
/// Windowviewmodel für MainWindow
/// </summary>
namespace plattform
{
    public class WindowViewModel
    {
        private Window mw;
        
        public WindowViewModel(Window window)
        {
            mw = window;
            //Max Height, Width des Fensters werden definiert
            mw.MaxHeight = SystemParameters.MaximizedPrimaryScreenHeight;
            mw.MaxWidth = SystemParameters.MaximizedPrimaryScreenWidth;
        }
        /// <summary>
        /// CurrentPage speichet die aktuelle Seite
        /// </summary>
        public static ApplicationPage CurrentPage { get; set; } = ApplicationPage.Login;
        
        /// <summary>
        /// Border des Windows
        /// </summary>
        public int Border { get; set; } = 5;
        public Thickness ResizeBorderThickness{get{ return new Thickness(Border); } }
        
        /// <summary>
        /// Gesuchte text wird übergeben
        /// </summary>
        public static string SearchText { get; set; }

        /// <summary>
        /// Höhe der PlayerKarte
        /// </summary>
        public static int PlayerCard { get; set; } = 0;

       
    }

}
