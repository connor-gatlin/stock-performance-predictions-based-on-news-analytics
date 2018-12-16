# Stock Performance Predictions based on News Analytics
In this analysis, we worked with a large uncensored dataset in an attempt to uncover the predictive power of market and news analytics. One challenge is that we had to plow through the data carefully, weed out data errors and impute missing values. Another challenge is the computational burden as the calculation wouldn't easily fit into the memory of a VM with 32GBs of memory. We had to carefully slice the data, recycle variables and collect unused space to avoid memory errors. For a memory hungry model like LSTM, both training and inference had to be done in batches. 

The results are encouraging as they show great improvements over the benchmark. Features from market data such as previous returns and prices have more significance in the models, contributing almost two thirds of the predictive power of the model. Features from news data further enhance the performance by about 35\%. As for model selections, gradient boosted trees show better performance than neural network. This could be due to overfitting or suboptimal look back window in the LSTM model. Tuning the LSTM model is beyond the scope of this project. Rather than picking the best model, we think data preprocessing and feature engineering play a bigger role in determining the final performance. Some extreme outliers could have compromised the out-of-sample performance of the models if they hadn't been treated with caution. 

## Data
Data is not uploaded to github due to copyright. You can find the dataset in [Kaggle's Two Sigma competition](https://www.kaggle.com/c/two-sigma-financial-news).

## Visualization
The web visualization code is under ./web.

![Example: Apple's stock prices and news analytics](https://github.com/connor-gatlin/stock-performance-predictions-based-on-news-analytics/raw/master/web/Website.png)

## Modeling
The modeling code is under ./src. Since tree based models have different data preprecessing requirements than neural network based model, we keep CatBoost Classifier and LightGBM in project.ipynb and LSTM in LSTM_final.ipynb.

## Report
The [report](https://github.com/connor-gatlin/stock-performance-predictions-based-on-news-analytics/raw/master/Report.pdf) documents all the details of our analysis.

## Slides
Slides used in the presentation can be found [here](https://github.com/connor-gatlin/stock-performance-predictions-based-on-news-analytics/raw/master/Presentation.pptx).

## Video
[Demo on Youtube](https://youtu.be/8oagRyBbris)
