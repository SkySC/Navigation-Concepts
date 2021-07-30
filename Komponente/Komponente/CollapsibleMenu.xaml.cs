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

namespace Komponente
{
    /// <summary>
    /// Interaktionslogik für CollapsibleMenu.xaml
    /// </summary>
    public partial class CollapsibleMenu : Page
    {
        public CollapsibleMenu()
        {
            InitializeComponent();
        }
        private void tgl2_Checked(object sender, RoutedEventArgs e)
        {
            tgl1.IsChecked = true;
        }

        private void tgl1_Checked(object sender, RoutedEventArgs e)
        {
            tgl2.IsChecked = true;
        }
        private void tgl2_Unchecked(object sender, RoutedEventArgs e)
        {
            tgl1.IsChecked = false;
        }
        private void tgl1_Unchecked(object sender, RoutedEventArgs e)
        {
            tgl2.IsChecked = false;
        }

        private void ScrollViewer_PreviewMouseWheel(object sender, MouseWheelEventArgs e)
        {
            ScrollViewer scv = (ScrollViewer)sender;
            scv.ScrollToVerticalOffset(scv.VerticalOffset - e.Delta);
            e.Handled = true;
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new HamburgerMenu());
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new Tab());
        }

        private void Button_Click_2(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new OffCanvasMenu());
        }

        private void Button_Click_3(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new TopLeftNavi());
        }
    }
}
