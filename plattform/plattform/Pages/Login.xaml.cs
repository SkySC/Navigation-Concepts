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

        private void login(object sender, RoutedEventArgs e)
        {
           WindowViewModel.CurrentPage = ApplicationPage.MainMenu;
           
            ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
            
        }

        private void DialogHost_DialogClosing(object sender, MaterialDesignThemes.Wpf.DialogClosingEventArgs eventArgs)
        {
            
        }

        private void Cancel(object sender, RoutedEventArgs e)
        {
            
        }
        private void Accept(object sender, RoutedEventArgs e)
        {
            Banner.Height = 50;
            Snackbar.MessageQueue.Enqueue("Wir haben eine E-Mail an Sie geschickt.", "OK" ,Snackbar.MessageQueue.Clear);
            Snackbar.MessageQueue.Enqueue("Es Kann einige Minuten dauern, bevor Sie die E-Mail erhalten haben.", "OK", Snackbar.MessageQueue.Clear);
            Snackbar.MessageQueue.Enqueue("Bitte, Schauen Sie auch im Spam!", "OK", Snackbar.MessageQueue.Clear);
            Snackbar.MessageQueue.Enqueue("Bitte, Haben Sie Geduld!", "OK", Snackbar.MessageQueue.Clear);
            
            Snackbar.ActionButtonPlacement = MaterialDesignThemes.Wpf.SnackbarActionButtonPlacementMode.Inline;
            
        }

        private void register(object sender, RoutedEventArgs e)
        {
            WindowViewModel.CurrentPage = ApplicationPage.Register;
            ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Banner.Height = 0;
        }

        
    }
}
