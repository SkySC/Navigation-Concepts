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
    /// Interaktionslogik für kategoie.xaml
    /// </summary>
    public partial class kategoie : Page
    {
        public kategoie()
        {
            InitializeComponent();
        }

        private void Button_MouseEnter(object sender, MouseEventArgs e)
        {
            (sender as Border).Margin = new Thickness(0);
            (sender as Border).Height = 220;
            (sender as Border).Width = 220;
        }

        private void Button_MouseLeave(object sender, MouseEventArgs e)
        {
            (sender as Border).Margin = new Thickness(20);
            (sender as Border).Height = 200;
            (sender as Border).Width = 200;
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new Songlist());

        }
    }
}
