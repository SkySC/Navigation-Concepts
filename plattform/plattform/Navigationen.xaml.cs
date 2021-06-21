using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace plattform
{
    /// <summary>
    /// Interaktionslogik für Navigationen.xaml
    /// </summary>
    public partial class Navigationen : Page
    {
        public Navigationen()
        {
            InitializeComponent();
        }

        private void hamburger(object sender, RoutedEventArgs e)
        {
            WindowViewModel.CurrentPage = ApplicationPage.HamburgerMenu;
            ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
        }

        private void collapsible(object sender, RoutedEventArgs e)
        {
            WindowViewModel.CurrentPage = ApplicationPage.CollapsipleMenu;
            ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
        }

        private void offcanvas(object sender, RoutedEventArgs e)
        {
            WindowViewModel.CurrentPage = ApplicationPage.OffCanvas;
            ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
        }

        private void tabbed(object sender, RoutedEventArgs e)
        {
            WindowViewModel.CurrentPage = ApplicationPage.Tab;
            ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
        }
    }
}
