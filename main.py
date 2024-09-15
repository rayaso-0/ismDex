import discord
import random
import time
import os
from token_1 import *
from discord.ext import commands

bot = commands.Bot(command_prefix="!", intents=discord.Intents.all())

@bot.event
async def on_ready():
    print("ismDex is ready!")

bot.run(bot_token)








