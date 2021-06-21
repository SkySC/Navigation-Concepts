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
    /// Interaktionslogik für MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
       
        public MainWindow()
        {
            InitializeComponent();

            this.DataContext = new WindowViewModel(this);
        //myFrame.Content = new Login();

    }

        private void Back_Click(object sender, RoutedEventArgs e)
        {
            switch (WindowViewModel.CurrentPage)
            {
                case ApplicationPage.Login:
                    
                    break;
                case ApplicationPage.OffCanvas:
                    
                    WindowViewModel.CurrentPage = ApplicationPage.Login;
                    this.DataContext = new WindowViewModel(this);
                    break;
                case ApplicationPage.Tab:
                   
                    WindowViewModel.CurrentPage = ApplicationPage.OffCanvas;
                    this.DataContext = new WindowViewModel(this);
                    break;
                default:
                    
                    break;

            }
        }

      
    }
}
