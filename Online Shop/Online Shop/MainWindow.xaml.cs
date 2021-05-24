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

namespace Online_Shop
{
    /// <summary>
    /// Interaktionslogik für MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            
            
        }

        private void ToggleButton_Checked(object sender, RoutedEventArgs e)
        {
            
           
            frame.Opacity = 0.3;
           
            tab1.Opacity = 0.3;
            tab2.Opacity = 0.3;
            

        }
        

        private void ToggleButton_Unchecked(object sender, RoutedEventArgs e)
        {
           frame.Opacity = 1;
           tab2.Opacity = 1;
           tab1.Opacity = 1;

        }

        private void Close_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }
        private void Minimize_Click(object sender, RoutedEventArgs e)
        {
            WindowState = WindowState.Minimized;
            
        }
        private void Maximize_Click(object sender, RoutedEventArgs e)
        {
            WindowState = WindowState.Maximized;
        }
        private void Window_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if (e.ChangedButton == MouseButton.Left)
                this.DragMove();
        }
        private void Login_Click(object sender, RoutedEventArgs e)
        {

        }

        private void Tab_Click(object sender, RoutedEventArgs e)
        {
            int index = int.Parse(((Button)e.Source).Uid);
            GridCursor.Margin = new Thickness(10 + (150 * index), 0, 0, 0);
        }
    }
}

