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
using System.Windows.Media.Animation;



//Erstellt von Omar Almasalmeh

namespace DropDown_Menu
{
    public partial class MainWindow : Window
    {
        private Storyboard myStoryboard;
        bool IsOpen = false;
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            
            if (IsOpen)
            {

                DoubleAnimation doubleAnimation = new DoubleAnimation();

                doubleAnimation.From = 215;
                doubleAnimation.To = 50;
                doubleAnimation.Duration = new Duration(TimeSpan.FromSeconds(0.5));
                myStoryboard = new Storyboard();
                myStoryboard.Children.Add(doubleAnimation);
                Storyboard.SetTargetName(doubleAnimation, stk_pnl1.Name);
                Storyboard.SetTargetProperty(doubleAnimation, new PropertyPath(StackPanel.HeightProperty));
                myStoryboard.Begin(this);


                IsOpen = false;

            }
            else
            {
                DoubleAnimation doubleAnimation = new DoubleAnimation();

                doubleAnimation.From = 50;
                doubleAnimation.To = 215;
                doubleAnimation.Duration = new Duration(TimeSpan.FromSeconds(0.5));
                myStoryboard = new Storyboard();
                myStoryboard.Children.Add(doubleAnimation);
                Storyboard.SetTargetName(doubleAnimation, stk_pnl1.Name);
                Storyboard.SetTargetProperty(doubleAnimation, new PropertyPath(StackPanel.HeightProperty));
                myStoryboard.Begin(this);


                IsOpen = true;
            }

        }
        
    }
}
