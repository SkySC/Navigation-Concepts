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
    /// Interaktionslogik für OffCanvasMenu.xaml
    /// </summary>
    public partial class OffCanvasMenu : Page
    {
        public OffCanvasMenu()
        {
            InitializeComponent();
            WindowViewModel.CurrentPage = ApplicationPage.Tab;
            frameOffCanvas.Content = new Tab();
        }

        private void ScrollViewer_PreviewMouseWheel(object sender, MouseWheelEventArgs e)
        {
            ScrollViewer scv = (ScrollViewer)sender;
            scv.ScrollToVerticalOffset(scv.VerticalOffset - e.Delta);
            e.Handled = true;
        }

        private void Chip_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}
