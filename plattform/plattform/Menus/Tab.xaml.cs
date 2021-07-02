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
    /// Interaktionslogik für Tab.xaml
    /// </summary>
    public partial class Tab : Page
    {
        public Tab()
        {
            InitializeComponent();
           
        }

        private void ScrollViewer_PreviewMouseWheel(object sender, MouseWheelEventArgs e)
        {
            ScrollViewer scv = (ScrollViewer)sender;
            scv.ScrollToHorizontalOffset(scv.HorizontalOffset - e.Delta);
            e.Handled = true;
        }

        private void RadioButton_Checked(object sender, RoutedEventArgs e)
        {
            setPage();
        }
        private void setPage()
        {
            if (firstTab.IsChecked == true)
            {
                //WindowViewModel.CurrentPage = ApplicationPage.MainMenu;
            }
            else
            {
                WindowViewModel.CurrentPage = ApplicationPage.Tab;
            }
        }

        private void j(object sender, MaterialDesignThemes.Wpf.DialogClosingEventArgs eventArgs)
        {

        }
    }
}
