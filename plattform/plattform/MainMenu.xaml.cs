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
    /// Interaktionslogik für MainMenu.xaml
    /// </summary>
    public partial class MainMenu : Page
    {
       
        public MainMenu()
        {
            InitializeComponent();
            
            WindowViewModel.CurrentPage = ApplicationPage.Startseite;
            main.Content = new Startseite();
            
            start.IsSelected = true;
            
        }
        /// <summary>
        /// Scroller
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ScrollViewer_PreviewMouseWheel(object sender, MouseWheelEventArgs e)
        {
            ScrollViewer scv = (ScrollViewer)sender;
            scv.ScrollToVerticalOffset(scv.VerticalOffset - e.Delta);
            e.Handled = true;
        }

        /// <summary>
        /// RückwärtsNavigation
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Back(object sender, RoutedEventArgs e)
        {
            
            switch (WindowViewModel.CurrentPage)
            {
                case ApplicationPage.Login:
                    
                    break;
                case ApplicationPage.Search:
                    WindowViewModel.CurrentPage = ApplicationPage.Startseite;
                    main.Content = new Startseite();
                    break;
                case ApplicationPage.MainMenu:

                    WindowViewModel.CurrentPage = ApplicationPage.Login;
                    ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
                    break;
                case ApplicationPage.Kategorie:

                    WindowViewModel.CurrentPage = ApplicationPage.Startseite;
                    main.Content = new Startseite();
                    break;
                case ApplicationPage.Songlist:

                    WindowViewModel.CurrentPage = ApplicationPage.Kategorie;
                    main.Content = new kategoie();
                    break;
                case ApplicationPage.Library:

                    WindowViewModel.CurrentPage = ApplicationPage.Startseite;
                    main.Content = new Startseite();
                    break;
                case ApplicationPage.Help:

                    WindowViewModel.CurrentPage = ApplicationPage.Startseite;
                    main.Content = new Startseite();
                    break;
                case ApplicationPage.Tab:

                    WindowViewModel.CurrentPage = ApplicationPage.Startseite;
                    main.Content = new Startseite();
                    break;
                default:

                    break;

            }
        }

        /// <summary>
        /// Menu Navigation
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>

        private void ListViewItem_Selected(object sender, RoutedEventArgs e)
        {
           
            if ((sender as ListViewItem).Name == "Abmelden")
            {
                // Wenn Abmelden, öffne Dialog, schließe Player
                WindowViewModel.PlayerCard = 0;
                Dialog.IsOpen = true;
            }
            else if ((sender as ListViewItem).Name == "kateg")
            {
                WindowViewModel.CurrentPage = ApplicationPage.Tab;
                main.Content = new kategoie();

            }
            else if ((sender as ListViewItem).Name == "start")
            {
                WindowViewModel.CurrentPage = ApplicationPage.Startseite;
                main.Content = new Startseite();

            }
            else if ((sender as ListViewItem).Name == "Lib")
            {
                WindowViewModel.CurrentPage = ApplicationPage.Library;
                main.Content = new Library();

            }
            else if ((sender as ListViewItem).Name == "Einst")
            {
                WindowViewModel.CurrentPage = ApplicationPage.Tab;
                main.Content = new Tab();

            }
            else if ((sender as ListViewItem).Name == "help")
            {
                WindowViewModel.CurrentPage = ApplicationPage.Help;
                main.Content = new Help();

            }
        }

        /// <summary>
        /// Effekte
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ListViewItem_Unselected(object sender, RoutedEventArgs e)
        {
            (sender as ListViewItem).Foreground = Brushes.Black;
            (sender as ListViewItem).GetChildOfType<StackPanel>().GetChildOfType<Label>().Foreground = Brushes.Black;
        }


        /// <summary>
        /// MouseLeave Effekte
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void start_MouseLeave(object sender, MouseEventArgs e)
        {
            if (sender.GetType() == typeof(ListViewItem))
            {
                (sender as ListViewItem).Foreground = Brushes.Black;
                (sender as ListViewItem).GetChildOfType<StackPanel>().GetChildOfType<Label>().Foreground = Brushes.Black;
            }
            else if (sender.GetType() == typeof(Button))
            {
                (sender as Button).Foreground = Brushes.Black;
            }
            else if(sender.GetType() == typeof(System.Windows.Controls.Primitives.ToggleButton))
            {
                (sender as System.Windows.Controls.Primitives.ToggleButton).Foreground = Brushes.Black;
            }
            else if (sender.GetType() == typeof(MaterialDesignThemes.Wpf.PopupBox))
            {
                (sender as MaterialDesignThemes.Wpf.PopupBox).Foreground = Brushes.Black;
            }
        }

        /// <summary>
        /// Mouseover Effekte
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void start_MouseEnter(object sender, MouseEventArgs e)
        {
            if (sender.GetType() == typeof(ListViewItem))
            {
                (sender as ListViewItem).Foreground = Brushes.DarkViolet;
                (sender as ListViewItem).GetChildOfType<StackPanel>().GetChildOfType<Label>().Foreground = Brushes.DarkViolet;
            }
            else if (sender.GetType() == typeof(Button))
            {
                (sender as Button).Foreground = Brushes.DarkViolet;
            }
            else if(sender.GetType() == typeof(System.Windows.Controls.Primitives.ToggleButton))
            {
                (sender as System.Windows.Controls.Primitives.ToggleButton).Foreground = Brushes.DarkViolet;
            }else if (sender.GetType() == typeof(MaterialDesignThemes.Wpf.PopupBox))
            {
                (sender as MaterialDesignThemes.Wpf.PopupBox).Foreground = Brushes.DarkViolet;
            }
            
        }
        /// <summary>
        /// Forward Button
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Forward(object sender, RoutedEventArgs e)
        {
            
        }

       
        /// <summary>
        /// SucheBar
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void searchbar_KeyUp_1(object sender, KeyEventArgs e)
        {
            if (e.Key != System.Windows.Input.Key.Enter) return;
            e.Handled = true;
            WindowViewModel.SearchText = searchbar.Text;
            main.Content = new Search();
            WindowViewModel.CurrentPage = ApplicationPage.Search;
            
            searchbar.Text = "";

        }
        /// <summary>
        /// Dropdown Menu Profile
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Button_Click_expand(object sender, RoutedEventArgs e)
        {
            if (expander.IsExpanded)
            {
                expander.IsExpanded = false;
                profil.Height = 0;
            }else
            {
                expander.IsExpanded = true;
                profil.Height = 210;
                benachrichtigung.Height = 0;
                tglBenachrichtigung.IsChecked = false;
                tglBenachrichtigung.Background = Brushes.White;
            }

        }

        /// <summary>
        /// Dropdown Menu Benachrichtigung
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ToggleButton_Checked(object sender, RoutedEventArgs e)
        {
            tglBenachrichtigung.Background = Brushes.Gray;
            benachrichtigung.Height = 350;
            profil.Height = 0;
            expander.IsExpanded = false;
        }

        private void ToggleButton_Unchecked(object sender, RoutedEventArgs e)
        {
            tglBenachrichtigung.Background = Brushes.White;
            benachrichtigung.Height = 0;
        }

        private void AbmeldenBtn(object sender, RoutedEventArgs e)
        {
            WindowViewModel.CurrentPage = ApplicationPage.Login;
            ((MainWindow)Application.Current.MainWindow).DataContext = new WindowViewModel(((MainWindow)Application.Current.MainWindow));
        }
        private void DialogHost_DialogClosing(object sender, MaterialDesignThemes.Wpf.DialogClosingEventArgs eventArgs)
        {

        }

        /// <summary>
        /// Dialog Abbrechen-Taste
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void DialogAbbrechen(object sender, RoutedEventArgs e)
        {
            Abmelden.IsSelected = false;
            WindowViewModel.PlayerCard = 70;
           
        }
    }
    
}
