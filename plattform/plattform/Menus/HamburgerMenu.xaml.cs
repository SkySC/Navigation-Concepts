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
    /// Interaktionslogik für HamburgerMenu.xaml
    /// </summary>
    public partial class HamburgerMenu : Page
    {
        public HamburgerMenu()
        {
            InitializeComponent();
            frame.Content = new Tab();
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

        private void ListViewItem_Selected(object sender, RoutedEventArgs e)
        {

        }

        private void back_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}
