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
using System.Timers;


namespace plattform
{
    /// <summary>
    /// Interaktionslogik für Login.xaml
    /// </summary>
    public partial class Login : Page
    {
       

        public Login()
        {
            InitializeComponent();
            
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if(check.IsChecked == true)
            {
                WindowViewModel.CurrentPage = ApplicationPage.OffCanvas;
                ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
            }else
            {
                SnackbarTwo.IsActive = true;
                borderAGP.BorderThickness = new Thickness(1);
            }
            
        }

        private void DialogHost_DialogClosing(object sender, MaterialDesignThemes.Wpf.DialogClosingEventArgs eventArgs)
        {
            
        }

        private void Cancel(object sender, RoutedEventArgs e)
        {
            check.IsChecked = false;
        }
        private void Accept(object sender, RoutedEventArgs e)
        {
            check.IsChecked = true;
            borderAGP.BorderThickness = new Thickness(0);
            SnackbarTwo.IsActive = false;
        }
    }
}
//WindowViewModel.CurrentPage = ApplicationPage.Tab;
//((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));